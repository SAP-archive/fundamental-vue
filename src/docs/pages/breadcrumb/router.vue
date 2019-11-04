<template>
  <FdBreadcrumb>
    <FdBreadcrumbItem>
      <FdBreadcrumbLink href="/">
        Home
      </FdBreadcrumbLink>
    </FdBreadcrumbItem>
    <FdBreadcrumbItem>
      <RouterLink :to="{ path: '/examples/basic-components' }" v-slot="{ href, navigate }">
        <FdBreadcrumbLink :href="href" @click="navigate">
          Basic Components
        </FdBreadcrumbLink>
      </RouterLink>
    </FdBreadcrumbItem>
    <FdBreadcrumbItem>
      <RouterLink :to="{ path: '/examples/basic-components/button' }" v-slot="{ href, navigate }">
        <FdBreadcrumbLink :href="href" @click="navigate">
          Button
        </FdBreadcrumbLink>
      </RouterLink>
    </FdBreadcrumbItem>
  </FdBreadcrumb>
</template>
