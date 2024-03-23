---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Mersal"
  text: "CRM System"
  tagline: An open-source CRM client.
  actions:
    - theme: brand
      text: Get Started
      link: /installation
    - theme: alt
      text: API Reference
      link: /api-reference

features:
  - icon: ✨
    title: Light Weight
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - icon: 💻
    title: Open-source
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - icon: 🎨
    title: Fully-customizable
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'A.Rahman Al-Khateeb',
    title: 'Team Leader & Frontend Developer',
    links: [
      { icon: 'github', link: 'https://github.com/khateeboveskey' },
      { icon: 'twitter', link: 'https://twitter.com/khateeb404' },
      { icon: 'youtube', link: 'https://youtube.com/@khateebedia' }
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Mahmood Ahmed',
    title: 'Backend Developer',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  }
]
</script>

## Our Team

Say hello to our awesome team.

<VPTeamMembers size="small" :members="members" />
