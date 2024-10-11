<template>
  <div class="sm:flex sm:items-center sm:justify-between sm:pb-[32px]">
    <Button
      :icon="PlayIcon"
      text="PLAY ALL"
      additionalClasses="w-full sm:w-auto gap-[10px] sm:px-[44px] sm:py-[12px] py-[7px] bg-gradient-to-l from-[#0075FF] to-[#6A3DCB] text-white leading-[15.6px] text-[13px] font-bold sm:mb-0 mb-[20px]"
    />

    <div class="flex items-center gap-[14px] sm:mb-0 mb-[20px]">
      <div class="sm:flex items-center gap-2 text-[13px] leading-[15.87px] font-medium hidden">
        Sort<FilterIcon />
      </div>

      <SelectField v-model="selectedOption" :options="options" placeholder="Choose an option" />
    </div>
  </div>
  <ResumeSection :albums="albums" />
  <NewSongSection :songs="songs" />
  <TopAlbumSection :albums="albums" />
  <ArtistSection :artists="artists" />
</template>

<script setup>
import { ref } from 'vue'
import Button from '@/components/common/Button.vue'
import SelectField from '@/components/common/SelectField.vue'
import FilterIcon from '@/icons/FilterIcon.vue'
import PlayIcon from '@/icons/PlayIcon.vue'
import ResumeSection from '@/components/home-page/main-section/ResumeSection.vue'
import NewSongSection from '@/components/home-page/main-section/NewSongSection.vue'
import TopAlbumSection from '@/components/home-page/main-section/TopAlbumSection.vue'
import ArtistSection from '@/components/home-page/main-section/ArtistSection.vue'

const selectedOption = ref('All Genres')
const options = ref([
  { label: 'All Genres', value: 'All Genres' },
  { label: 'Classical', value: 'Classical' },
  { label: 'Dance/ Electronic', value: 'Dance/ Electronic' },
  { label: 'Hip-Hop/ Rap', value: 'Hip-Hop/ Rap' },
  { label: 'Indie/ Rock', value: 'Indie/ Rock' },
  { label: 'Pop', value: 'Pop' }
])
const albums = ref([
  {
    id: '1',
    image: '/src/assets/album_sample_img.jpeg',
    rating: '5.0',
    title: 'The Long Road',
    subtitle: 'Nightrage',
    cost: '2.66'
  },
  {
    id: '2',
    image: '/src/assets/album_sample_img.jpeg',
    rating: '5.0',
    title: 'The Long Road',
    subtitle: 'Nightrage',
    cost: '2.66'
  },
  {
    id: '3',
    image: '/src/assets/album_sample_img.jpeg',
    rating: '5.0',
    title: 'The Long Road',
    subtitle: 'Nightrage',
    cost: '2.66'
  },
  {
    id: '4',
    image: '/src/assets/album_sample_img.jpeg',
    rating: '5.0',
    title: 'The Long Road',
    subtitle: 'Nightrage',
    cost: '2.66'
  },
  {
    id: '5',
    image: '/src/assets/album_sample_img.jpeg',
    rating: '5.0',
    title: 'The Long Road',
    subtitle: 'Nightrage',
    cost: '2.66'
  },
  {
    id: '6',
    image: '/src/assets/album_sample_img.jpeg',
    rating: '5.0',
    title: 'The Long Road',
    subtitle: 'Nightrage',
    cost: '2.66'
  }
])
const songs = ref([
  {
    id: '1',
    image: '/src/assets/song_sample_img.jpeg',
    trackName: 'Track Name',
    artistName: 'Artist Name',
    price: '2.66'
  },
  {
    id: '2',
    image: '/src/assets/song_sample_img.jpeg',
    trackName: 'Track Name',
    artistName: 'Artist Name',
    price: '2.66'
  },
  {
    id: '3',
    image: '/src/assets/song_sample_img.jpeg',
    trackName: 'Track Name',
    artistName: 'Artist Name',
    price: '2.66'
  },
  {
    id: '4',
    image: '/src/assets/song_sample_img.jpeg',
    trackName: 'Track Name',
    artistName: 'Artist Name',
    price: '2.66'
  },
  {
    id: '5',
    image: '/src/assets/song_sample_img.jpeg',
    trackName: 'Track Name',
    artistName: 'Artist Name',
    price: '2.66'
  },
  {
    id: '6',
    image: '/src/assets/song_sample_img.jpeg',
    trackName: 'Track Name',
    artistName: 'Artist Name',
    price: '2.66'
  },
  {
    id: '7',
    image: '/src/assets/song_sample_img.jpeg',
    trackName: 'Track Name',
    artistName: 'Artist Name',
    price: '2.66'
  },
  {
    id: '8',
    image: '/src/assets/song_sample_img.jpeg',
    trackName: 'Track Name',
    artistName: 'Artist Name',
    price: '2.66'
  },
  {
    id: '9',
    image: '/src/assets/song_sample_img.jpeg',
    trackName: 'Track Name',
    artistName: 'Artist Name',
    price: '2.66'
  }
])
const artists = ref([
  {
    id: '1',
    image: '/src/assets/artist_sample_img.jpeg',
    name: 'Jane Cooper',
    tagline: '#Singer, Producer',
    rating: '5.0',
    followers: '873.7k'
  },
  {
    id: '2',
    image: '/src/assets/artist_sample_img.jpeg',
    name: 'Jane Cooper',
    tagline: '#Singer, Producer',
    rating: '5.0',
    followers: '873.7k'
  },
  {
    id: '3',
    image: '/src/assets/artist_sample_img.jpeg',
    name: 'Jane Cooper',
    tagline: '#Singer, Producer',
    rating: '5.0',
    followers: '873.7k'
  },
  {
    id: '4',
    image: '/src/assets/artist_sample_img.jpeg',
    name: 'Jane Cooper',
    tagline: '#Singer, Producer',
    rating: '5.0',
    followers: '873.7k'
  },
  {
    id: '5',
    image: '/src/assets/artist_sample_img.jpeg',
    name: 'Jane Cooper',
    tagline: '#Singer, Producer',
    rating: '5.0',
    followers: '873.7k'
  },
  {
    id: '6',
    image: '/src/assets/artist_sample_img.jpeg',
    name: 'Jane Cooper',
    tagline: '#Singer, Producer',
    rating: '5.0',
    followers: '873.7k'
  }
])
</script>

<style lang="scss" scoped></style>
