<template>
  <fd-tree
    :items="items"
    itemChildrenPath="subordinates"
    itemid="profile.badgeId"
    itemValuePath="profile.nickname"
    itemDisabledPath="deceased"
  >
    <template v-slot:prepend="{ item, expanded }">
      <fd-image size="s" :url="$withBase(item.avatar)" />
    </template>
  </fd-tree>
</template>

<script>
const crews = [
  {
    avatar: "images/products/05.png",
    profile: { nickname: "Monkey D. Luffy", badgeId: "c3z1r" },
    subordinates: [
      { avatar: "images/products/05.png", profile: { nickname: "Zoro", badgeId: "XCixH" } },
      { avatar: "images/products/05.png", profile: { nickname: "Sanji", badgeId: "6Qg0C" } },
      { avatar: "images/products/05.png", profile: { nickname: "Robin", badgeId: "NZNCj" } },
      { avatar: "images/products/05.png", profile: { nickname: "Franky", badgeId: "7zk22" } },
      { avatar: "images/products/05.png", profile: { nickname: "Soul King ", badgeId: "U5KUZ" } },
      { avatar: "images/products/05.png", profile: { nickname: "Sogeking", badgeId: "ywUpD" } },
      { avatar: "images/products/05.png", profile: { nickname: "Chopper", badgeId: "p42mQ" } },
      { avatar: "images/products/05.png", profile: { nickname: "Nami", badgeId: "JqcX3" } },
      { avatar: "images/products/05.png", profile: { nickname: "Jinbe", badgeId: "JqcX5" } }
    ]
  },
  {
    avatar: "images/logo@2x.png",
    profile: { nickname: "Joker", badgeId: "c3z1r2" },
    subordinates: [
      { avatar: "images/logo@2x.png", profile: { nickname: "Trebol", badgeId: "XCixH2" } },
      {
        avatar: "images/logo@2x.png",
        profile: { nickname: "Vergo", badgeId: "6Qg0C2" },
        deceased: true
      },
      {
        avatar: "images/logo@2x.png",
        profile: { nickname: "Corazon", badgeId: "NZNCj2" },
        deceased: true
      },
      {
        avatar: "images/logo@2x.png",
        profile: { nickname: "Pica", badgeId: "7zk222" },
        subordinates: [
          { avatar: "images/logo@2x.png", profile: { nickname: "Baby 5", badgeId: "XCixH25" } },
          { avatar: "images/logo@2x.png", profile: { nickname: "Buffalo", badgeId: "XCixH23" } },
          { avatar: "images/logo@2x.png", profile: { nickname: "Gladius", badgeId: "XCixH24" } }
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
