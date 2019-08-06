<template>
  <fd-tree
    :items="items"
    itemChildrenPath="subordinates"
    itemid="profile.badgeId"
    itemValuePath="profile.nickname"
    itemDisabledPath="deceased"
  >
    <template v-slot:prepend="{ item, expanded }">
      <fd-image size="s" :url="item.avatar" />
    </template>
  </fd-tree>
</template>

<script>
const avatars = [
  "https://vignette.wikia.nocookie.net/onepiece/images/5/58/Monkey_D._Luffy_Post_Timeskip_Portrait.png/revision/latest/scale-to-width-down/119?cb=20181024214118",
  "https://vignette.wikia.nocookie.net/onepiece/images/b/bc/Roronoa_Zoro_Post_Timeskip_Portrait.png/revision/latest/scale-to-width-down/119?cb=20190708150235",
  "https://vignette.wikia.nocookie.net/onepiece/images/e/e5/Sanji_Post_Timeskip_Portrait.png/revision/latest/scale-to-width-down/119?cb=20190609054007",
  "https://vignette.wikia.nocookie.net/onepiece/images/9/90/Nico_Robin_Post_Timeskip_Portrait.png/revision/latest/scale-to-width-down/119?cb=20181008030024",
  "https://vignette.wikia.nocookie.net/onepiece/images/8/83/Franky_Post_Timeskip_Portrait.png/revision/latest/scale-to-width-down/119?cb=20190525221942",
  "https://vignette.wikia.nocookie.net/onepiece/images/0/03/Brook_Post_Timeskip_Portrait.png/revision/latest/scale-to-width-down/119?cb=20190414151503",
  "https://vignette.wikia.nocookie.net/onepiece/images/3/37/Usopp_Post_Timeskip_Portrait.png/revision/latest/scale-to-width-down/119?cb=20180514152341",
  "https://vignette.wikia.nocookie.net/onepiece/images/e/e2/Tony_Tony_Chopper_Post_Timeskip_Portrait.png/revision/latest/scale-to-width-down/119?cb=20181121032207",
  "https://vignette.wikia.nocookie.net/onepiece/images/2/2f/Nami_Post_Timeskip_Portrait.png/revision/latest/scale-to-width-down/119?cb=20141206204746",
  "https://vignette.wikia.nocookie.net/onepiece/images/f/f7/Jinbe_Portrait.png/revision/latest/scale-to-width-down/119?cb=20190724150037",
  "https://vignette.wikia.nocookie.net/onepiece/images/b/b5/Donquixote_Doflamingo_Portrait.png/revision/latest/scale-to-width-down/119?cb=20190121073613",
  "https://vignette.wikia.nocookie.net/onepiece/images/a/a8/Trebol_Portrait.png/revision/latest/scale-to-width-down/119?cb=20190725082846",
  "https://vignette.wikia.nocookie.net/onepiece/images/1/1a/Vergo_Portrait.png/revision/latest/scale-to-width-down/119?cb=20190723190511",
  "https://vignette.wikia.nocookie.net/onepiece/images/6/69/Donquixote_Rosinante_Portrait.png/revision/latest/scale-to-width-down/119?cb=20190108061932",
  "https://vignette.wikia.nocookie.net/onepiece/images/1/16/Pica_Portrait.png/revision/latest/scale-to-width-down/119?cb=20181124204655",
  "https://vignette.wikia.nocookie.net/onepiece/images/6/62/Baby_5_Portrait.png/revision/latest/scale-to-width-down/119?cb=20190703095114",
  "https://vignette.wikia.nocookie.net/onepiece/images/3/37/Buffalo_Portrait.png/revision/latest/scale-to-width-down/119?cb=20150506203938",
  "https://vignette.wikia.nocookie.net/onepiece/images/c/c3/Gladius_Portrait.png/revision/latest/scale-to-width-down/119?cb=20190724124705"
];

const crews = [
  {
    avatar: avatars[0],
    profile: { nickname: "Monkey D. Luffy", badgeId: "c3z1r" },
    subordinates: [
      { avatar: avatars[1], profile: { nickname: "Zoro", badgeId: "XCixH" } },
      { avatar: avatars[2], profile: { nickname: "Sanji", badgeId: "6Qg0C" } },
      { avatar: avatars[3], profile: { nickname: "Robin", badgeId: "NZNCj" } },
      { avatar: avatars[4], profile: { nickname: "Franky", badgeId: "7zk22" } },
      { avatar: avatars[5], profile: { nickname: "Soul King ", badgeId: "U5KUZ" } },
      { avatar: avatars[6], profile: { nickname: "Sogeking", badgeId: "ywUpD" } },
      { avatar: avatars[7], profile: { nickname: "Chopper", badgeId: "p42mQ" } },
      { avatar: avatars[8], profile: { nickname: "Nami", badgeId: "JqcX3" } },
      { avatar: avatars[9], profile: { nickname: "Jinbe", badgeId: "JqcX5" } }
    ]
  },
  {
    avatar: avatars[10],
    profile: { nickname: "Joker", badgeId: "c3z1r2" },
    subordinates: [
      { avatar: avatars[11], profile: { nickname: "Trebol", badgeId: "XCixH2" } },
      { avatar: avatars[12], profile: { nickname: "Vergo", badgeId: "6Qg0C2" }, deceased: true },
      { avatar: avatars[13], profile: { nickname: "Corazon", badgeId: "NZNCj2" }, deceased: true },
      {
        avatar: avatars[14],
        profile: { nickname: "Pica", badgeId: "7zk222" },
        subordinates: [
          { avatar: avatars[15], profile: { nickname: "Baby 5", badgeId: "XCixH25" } },
          { avatar: avatars[16], profile: { nickname: "Buffalo", badgeId: "XCixH23" } },
          { avatar: avatars[17], profile: { nickname: "Gladius", badgeId: "XCixH24" } }
        ]
      }
    ]
  }
];

export default {
  data() {
    return {
      items: crews
    };
  }
};
</script>
