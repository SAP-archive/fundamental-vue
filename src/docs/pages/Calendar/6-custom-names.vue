<title>Calendar with custom Names</title>
<tip>You can customize the names (day of week and month of year)  displayed in the calendar by using the props `dayNames` and `monthNames`. This is also how you would implement i18n.</tip>
<template>
  <div>
      <FdCalendar
        :dayNames="['1', '2', '3', '4', '5', '6', '7']"
        :monthNames="[
          '1️⃣', '2️⃣', '3️⃣', '4️⃣',
          '5️⃣', '6️⃣', '7️⃣', '8️⃣',
          '9️⃣', '🔟', '1️⃣1️⃣', '1️⃣2️⃣',
        ]"
      />
  </div>
</template>
