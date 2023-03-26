<template>
  <div>
    <div id="marker" class="marker" ref="marker">
      <div class="marker__hover-info" v-html="hoverMessage" />
      <img class="marker__image" :src="pinImgSrc" :alt="pinImgAlt" />
    </div>
    <div class="map-container">
      <div id="map" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMapInfo } from "@/composables/useMapInfo";
import DragPanInteraction from "ol/interaction/DragPan";
import { Tile } from "ol/layer";
import Map from "ol/Map";
import Overlay from "ol/Overlay";
import { fromLonLat } from "ol/proj";
import XYZ from "ol/source/XYZ";
import View from "ol/View";
const {
  zoom,
  hoverMessage,
  centerLatitude,
  centerLongitude,
  pinLatitude,
  pinLongitude,
  pinImgAlt,
  pinImgSrc,
} = useMapInfo();

const marker = ref<HTMLElement | null>(null);

onMounted(() => {
  const map = new Map({
    target: "map",
    layers: [
      new Tile({
        source: new XYZ({
          url: "http://mt0.google.com/vt/lyrs=r&hl=en&x={x}&y={y}&z={z}",
        }),
      }),
    ],
    view: new View({
      center: fromLonLat([centerLongitude, centerLatitude]),
      maxZoom: zoom,
      minZoom: zoom,
      zoom,
    }),
    interactions: [new DragPanInteraction()],
    overlays: [
      new Overlay({
        position: fromLonLat([pinLongitude, pinLatitude]),
        positioning: "bottom-center",
        element: marker.value as HTMLElement,
        stopEvent: false,
      }),
    ],
  });
});
</script>

<style lang="scss">
.map-container {
  position: relative;
  width: 100%;
  height: 15rem;
}

#map {
  width: 100%;
  height: 100%;
}

.marker {
  background-color: blue;
  box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.5);
  width: 3rem;
  height: 3rem;
  border-radius: 50% 50% 0 50%;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.2);

    .marker__hover-info {
      transform: translateY(-100%);
      top: -4px;
      opacity: 1;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  &__hover-info {
    position: absolute;

    top: 0;
    padding: 0.5rem;
    border-radius: 5px;
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.5);
    font-size: 0.75rem;

    background-color: var(--background-color);
    color: var(--text-color);
    width: max-content;
    height: max-content;
    max-width: 15rem;

    transition: all 0.2s ease;
    opacity: 0;
  }
}
</style>
