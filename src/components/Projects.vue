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
            selectedValue: "",
        }
    },

    methods: {
        getImage(path) {
            return new URL(path, import.meta.url).href;
        },

        goTo(path) {
            window.location.href = `${path}`;
        },
    }
}
</script>

<template>
    <section class="container">

        <!-- title -->
        <h2 class="text-center mb-4">
            PROJECTS:
        </h2>
        <!-- / title -->

        <!-- MEDIA-PLAYER -->
        <form class="row fs-4 mb-4">
            <div class="offset-3 col-6 row g-0">
                <div class="col-4 text-center rounded-3" id="label">
                    <span class="me-2">
                        <i class="fa-solid fa-camera-retro"></i>
                    </span>
                    <span id="my_projects">projects</span>
                </div>
                <div class="col-8">
                    <select v-model="selectedValue" name="" id="media" class="form-control" @change="goTo(selectedValue)">
                        <option value="">scegli un progetto</option>
                        <option v-for="(item, index) in store.mediaList" :value="item.link" :key="index">
                            {{ item.name }}
                        </option>
                    </select>
                </div>
            </div>
        </form>
        <!-- / MEDIA-PLAYER -->

        <!-- SLIDER -->
        <div class="content-box">
            <swiper class="m-4" :modules="modules" :slides-per-view="1" :space-between="0" navigation
                :pagination="{ clickable: true }" @swiper="onSwiper" @slideChange="onSlideChange" loop="true">

                <!-- all photos -->
                <swiper-slide class="slider d-flex justify-content-center" v-for="(photo, index) in store.sliderArray"
                    :key="index">
                    <img class="rounded-4" :src="getImage(photo)" alt="">
                </swiper-slide>
                <!-- / all photos -->

            </swiper>
        </div>
        <!-- / SLIDER -->

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
        max-height: 80vh;
    }

    #label {
        background-color: $orange;
    }

    @media screen and (max-width: 550px) {
        #my_projects {
            display: none;
        }
    }

}
</style>