<title>Section with Panels</title>

<template>
<div>
  <FdSection>
    <FdContainer>
      <FdPanel>Panel 1</FdPanel>
    </FdContainer>
  </FdSection>

  <FdSection>
    <FdContainer>
      <FdCol :span=6>
        <FdPanel>Panel 2 with col span 6</FdPanel>
      </FdCol>
      <FdCol :span=6>
        <FdPanel>Panel 3 with col span 6</FdPanel>
      </FdCol>
    </FdContainer>
  </FdSection>

</div>
</template>