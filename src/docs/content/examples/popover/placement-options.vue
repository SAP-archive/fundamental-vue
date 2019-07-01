<template>
  <div>
    <!-- Row 1 -->
    <div class="fd-container">
      <div class="fd-col--shift-3 fd-col--2 fd-has-text-align-center">
        <fd-popover with-arrow placement="top-start">
          <template #control="{toggle}">
            <fd-button @click="toggle" icon="navigation-up-arrow" />
          </template>
          <template #default="{hide}">
            <fd-menu @select="hide">
              <fd-menu-list>
                <fd-menu-item>Option 1</fd-menu-item>
                <fd-menu-item>Option 2</fd-menu-item>
                <fd-menu-item>Option 3</fd-menu-item>
              </fd-menu-list>
            </fd-menu>
          </template>
        </fd-popover>
      </div>

      <div class="fd-col--2 fd-has-text-align-center">
        <fd-popover with-arrow placement="top">
          <template #control="{toggle}">
            <fd-button @click="toggle" icon="navigation-up-arrow" />
          </template>
          <template #default="{hide}">
            <fd-menu @select="hide">
              <fd-menu-list>
                <fd-menu-item>Option 1</fd-menu-item>
                <fd-menu-item>Option 2</fd-menu-item>
                <fd-menu-item>Option 3</fd-menu-item>
              </fd-menu-list>
            </fd-menu>
          </template>
        </fd-popover>
      </div>

      <div class="fd-col--2 fd-has-text-align-center">
        <fd-popover with-arrow placement="top-end">
          <template #control="{toggle}">
            <fd-button @click="toggle" icon="navigation-up-arrow" />
          </template>
          <template #default="{hide}">
            <fd-menu @select="hide">
              <fd-menu-list>
                <fd-menu-item>Option 1</fd-menu-item>
                <fd-menu-item>Option 2</fd-menu-item>
                <fd-menu-item>Option 3</fd-menu-item>
              </fd-menu-list>
            </fd-menu>
          </template>
        </fd-popover>
      </div>
    </div>
    <!-- /Row 1 -->
    <!-- Row 2 -->
    <div class="fd-container">
      <div class="fd-col--shift-2 fd-col--2">
        <fd-popover with-arrow placement="left">
          <template #control="{toggle}">
            <fd-button @click="toggle" icon="navigation-left-arrow" />
          </template>
          <template #default="{hide}">
            <fd-menu @select="hide">
              <fd-menu-list>
                <fd-menu-item>Option 1</fd-menu-item>
                <fd-menu-item>Option 2</fd-menu-item>
                <fd-menu-item>Option 3</fd-menu-item>
              </fd-menu-list>
            </fd-menu>
          </template>
        </fd-popover>
      </div>

      <div class="fd-col--shift-4 fd-col--2 fd-has-text-align-right">
        <fd-popover with-arrow placement="right">
          <template #control="{toggle}">
            <fd-button @click="toggle" icon="navigation-right-arrow" />
          </template>
          <template #default="{hide}">
            <fd-menu @select="hide">
              <fd-menu-list>
                <fd-menu-item>Option 1</fd-menu-item>
                <fd-menu-item>Option 2</fd-menu-item>
                <fd-menu-item>Option 3</fd-menu-item>
              </fd-menu-list>
            </fd-menu>
          </template>
        </fd-popover>
      </div>
    </div>
    <!-- /Row 2 -->
    <!-- Row 3 -->
    <div class="fd-container">
      <div class="fd-col--shift-3 fd-col--2 fd-has-text-align-center">
        <fd-popover with-arrow placement="bottom-start">
          <template #control="{toggle}">
            <fd-button @click="toggle" icon="navigation-down-arrow" />
          </template>
          <template #default="{hide}">
            <fd-menu @select="hide">
              <fd-menu-list>
                <fd-menu-item>Option 1</fd-menu-item>
                <fd-menu-item>Option 2</fd-menu-item>
                <fd-menu-item>Option 3</fd-menu-item>
              </fd-menu-list>
            </fd-menu>
          </template>
        </fd-popover>
      </div>

      <div class="fd-col--2 fd-has-text-align-center">
        <fd-popover with-arrow placement="bottom">
          <template #control="{toggle}">
            <fd-button @click="toggle" icon="navigation-down-arrow" />
          </template>
          <template #default="{hide}">
            <fd-menu @select="hide">
              <fd-menu-list>
                <fd-menu-item>Option 1</fd-menu-item>
                <fd-menu-item>Option 2</fd-menu-item>
                <fd-menu-item>Option 3</fd-menu-item>
              </fd-menu-list>
            </fd-menu>
          </template>
        </fd-popover>
      </div>

      <div class="fd-col--2 fd-has-text-align-center">
        <fd-popover with-arrow placement="bottom-end">
          <template #control="{toggle}">
            <fd-button @click="toggle" icon="navigation-down-arrow" />
          </template>
          <template #default="{hide}">
            <fd-menu @select="hide">
              <fd-menu-list>
                <fd-menu-item>Option 1</fd-menu-item>
                <fd-menu-item>Option 2</fd-menu-item>
                <fd-menu-item>Option 3</fd-menu-item>
              </fd-menu-list>
            </fd-menu>
          </template>
        </fd-popover>
      </div>
    </div>
    <!-- /Row 3 -->
  </div>
</template>
