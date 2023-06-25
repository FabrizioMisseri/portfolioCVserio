<script>
// import slider
import { store } from '../../store';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// -------------

export default {

    // setup slider
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Pagination, Navigation],
        };
    },
    // -------------

    name: 'Projects',

    components: {
        Swiper,
        SwiperSlide,
    },

    data() {
        return {
            showProjectFlag: false,
            store,
        }
    },

    methods: {
        getImage(path) {
            return new URL(path, import.meta.url).href;
        },
    }
}
</script>

<template>
    <section class="container">

        <div class="content-box">
            <!-- SLIDER -->
            <swiper class="m-4" :modules="modules" :slides-per-view="1" :space-between="0" navigation
                :pagination="{ clickable: true }" @swiper="onSwiper" @slideChange="onSlideChange" loop="true">

                <!-- all photos -->
                <swiper-slide class="slider d-flex justify-content-center" v-for="(photo, index) in store.sliderArray"
                    :key="index">
                    <img class="rounded-4" :src="getImage(photo)" alt="">
                </swiper-slide>
                <!-- / all photos -->

            </swiper>
            <!-- / SLIDER -->
        </div>

    </section>
</template>

<style lang="scss">
@use "../styles/partials/colors.scss" as *;

section {

    .swiper-pagination-bullet-active {
        background-color: $red;
    }

    .swiper-button-next::after,
    .swiper-button-prev::after {
        color: $red;
        font-weight: 700;
    }

    img {
        max-height: 85vh;
    }

}
</style>