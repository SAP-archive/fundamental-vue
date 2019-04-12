<title>Placement Options</title>
<docs>Use the `placement`-prop to any of the following values: `bottom-start`, `bottom`, `bottom-end`, `left-start`, `left`, `left-end`, `right-start`, `right`, `right-end`, `top-start`, `top` and `top-end`.
</docs>
<template>
  <div>
    <!-- Row 1 -->
    <div class="fd-container">
      <div class="fd-col--shift-3 fd-col--2 fd-has-text-align-center">
        <FdPopover with-arrow placement="top-start">
          <template #control="{toggle}">
            <FdButton @click="toggle" icon="navigation-up-arrow" />
          </template>
          <template #default="{hide}">
            <FdMenu @select="hide">
              <FdMenuList>
                <FdMenuItem>Option 1</FdMenuItem>
                <FdMenuItem>Option 2</FdMenuItem>
                <FdMenuItem>Option 3</FdMenuItem>
              </FdMenuList>
            </FdMenu>
          </template>
        </FdPopover>
      </div>

      <div class="fd-col--2 fd-has-text-align-center">
        <FdPopover with-arrow placement="top">
          <template #control="{toggle}">
            <FdButton @click="toggle" icon="navigation-up-arrow" />
          </template>
          <template #default="{hide}">
            <FdMenu @select="hide">
              <FdMenuList>
                <FdMenuItem>Option 1</FdMenuItem>
                <FdMenuItem>Option 2</FdMenuItem>
                <FdMenuItem>Option 3</FdMenuItem>
              </FdMenuList>
            </FdMenu>
          </template>
        </FdPopover>
      </div>

      <div class="fd-col--2 fd-has-text-align-center">
        <FdPopover with-arrow placement="top-end">
          <template #control="{toggle}">
            <FdButton @click="toggle" icon="navigation-up-arrow" />
          </template>
          <template #default="{hide}">
            <FdMenu @select="hide">
              <FdMenuList>
                <FdMenuItem>Option 1</FdMenuItem>
                <FdMenuItem>Option 2</FdMenuItem>
                <FdMenuItem>Option 3</FdMenuItem>
              </FdMenuList>
            </FdMenu>
          </template>
        </FdPopover>
      </div>
    </div>
    <!-- /Row 1 -->
    <!-- Row 2 -->
    <div class="fd-container">
      <div class="fd-col--shift-2 fd-col--2">
        <FdPopover with-arrow placement="left">
          <template #control="{toggle}">
            <FdButton @click="toggle" icon="navigation-left-arrow" />
          </template>
          <template #default="{hide}">
            <FdMenu @select="hide">
              <FdMenuList>
                <FdMenuItem>Option 1</FdMenuItem>
                <FdMenuItem>Option 2</FdMenuItem>
                <FdMenuItem>Option 3</FdMenuItem>
              </FdMenuList>
            </FdMenu>
          </template>
        </FdPopover>
      </div>

      <div class="fd-col--shift-4 fd-col--2 fd-has-text-align-right">
        <FdPopover with-arrow placement="right">
          <template #control="{toggle}">
            <FdButton @click="toggle" icon="navigation-right-arrow" />
          </template>
          <template #default="{hide}">
            <FdMenu @select="hide">
              <FdMenuList>
                <FdMenuItem>Option 1</FdMenuItem>
                <FdMenuItem>Option 2</FdMenuItem>
                <FdMenuItem>Option 3</FdMenuItem>
              </FdMenuList>
            </FdMenu>
          </template>
        </FdPopover>
      </div>
    </div>
    <!-- /Row 2 -->
    <!-- Row 3 -->
    <div class="fd-container">
      <div class="fd-col--shift-3 fd-col--2 fd-has-text-align-center">
        <FdPopover with-arrow placement="bottom-start">
          <template #control="{toggle}">
            <FdButton @click="toggle" icon="navigation-down-arrow" />
          </template>
          <template #default="{hide}">
            <FdMenu @select="hide">
              <FdMenuList>
                <FdMenuItem>Option 1</FdMenuItem>
                <FdMenuItem>Option 2</FdMenuItem>
                <FdMenuItem>Option 3</FdMenuItem>
              </FdMenuList>
            </FdMenu>
          </template>
        </FdPopover>
      </div>

      <div class="fd-col--2 fd-has-text-align-center">
        <FdPopover with-arrow placement="bottom">
          <template #control="{toggle}">
            <FdButton @click="toggle" icon="navigation-down-arrow" />
          </template>
          <template #default="{hide}">
            <FdMenu @select="hide">
              <FdMenuList>
                <FdMenuItem>Option 1</FdMenuItem>
                <FdMenuItem>Option 2</FdMenuItem>
                <FdMenuItem>Option 3</FdMenuItem>
              </FdMenuList>
            </FdMenu>
          </template>
        </FdPopover>
      </div>

      <div class="fd-col--2 fd-has-text-align-center">
        <FdPopover with-arrow placement="bottom-end">
          <template #control="{toggle}">
            <FdButton @click="toggle" icon="navigation-down-arrow" />
          </template>
          <template #default="{hide}">
            <FdMenu @select="hide">
              <FdMenuList>
                <FdMenuItem>Option 1</FdMenuItem>
                <FdMenuItem>Option 2</FdMenuItem>
                <FdMenuItem>Option 3</FdMenuItem>
              </FdMenuList>
            </FdMenu>
          </template>
        </FdPopover>
      </div>
    </div>
    <!-- /Row 3 -->
  </div>
</template>
