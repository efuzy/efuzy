<template>
  <div class="q-pa-md">
    <div class="q-col-gutter-md row items-start">
      <div class="col-6">
        <q-img
          src="https://cdn.efuzy.dev/img/parallax2.jpg"
          style="width: 100%"
          native-context-menu
        >
          <div class="absolute-bottom text-subtitle1 text-center">
            Caption
          </div>
        </q-img>
      </div>

      <div class="col-6">
        <q-img src="https://cdn.efuzy.dev/img/parallax2.jpg" native-context-menu>
          <div class="absolute-top text-center">
            Caption
          </div>
        </q-img>
      </div>

      <div class="col-6">
        <q-img src="https://cdn.efuzy.dev/img/parallax2.jpg" native-context-menu>
          <div class="absolute-bottom-right text-subtitle2">
            Caption
          </div>
        </q-img>
      </div>

      <div class="col-6">
        <q-img src="https://cdn.efuzy.dev/img/parallax2.jpg" native-context-menu>
          <q-icon class="absolute all-pointer-events" size="32px" name="info" color="white" style="top: 8px; left: 8px">
            <q-tooltip>
              Tooltip
            </q-tooltip>
          </q-icon>
        </q-img>
      </div>
    </div>
  </div>
</template>
