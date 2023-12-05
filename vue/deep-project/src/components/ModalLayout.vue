<template>
  <div class="modal-container">
    <header>
      <slot name="header"> </slot>
    </header>
    <main>
      <slot> </slot>
      <!-- slot name 하나정도는 default 값으로 줄수 있어서 정의 안해줘도 된다 -->
    </main>
    <footer>
      <slot name="footer"> </slot>
    </footer>
  </div>
</template>
