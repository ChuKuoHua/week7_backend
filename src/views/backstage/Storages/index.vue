<template>
  <div>
    <loading :active.sync="isLoading">
      <i class="loading-box"></i>
    </loading>
    <div class="col-md-10 ml-sm-auto px-4 mt">
      <table class="table table-striped mt-5">
        <thead class="img-thead-col font-weight-bold">
          <tr>
            <th>圖片縮圖</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody v-if="storages.length">
          <tr
            v-for="(item, key) in storages"
            :key="key"
          >
            <td>
              <img
                :src="item.path"
                width="100px"
                class="img-fluid"
              >
            </td>
            <td>
              <div class="btn-group btn-group-sm">
                <button
                  class="btn btn-outline-danger"
                  @click.prevent="openModel(item)"
                >
                  <font-awesome-icon :icon="['fa', 'trash']" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- 分頁 -->
      <Pagination
        :pages="pagination"
        @changePage="getData"
      />

      <!-- 刪除 Modal -->
      <DelStorages
        :temp-data="tempData"
        @update="getData"
      />
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Pagination from '@/components/Pagination.vue';
import Toast from '@/components/alert/Toast';
import DelStorages from './components/DelStorages.vue';

export default {
  name: 'BackPictures',
  components: {
    Pagination,
    DelStorages,
  },
  data() {
    return {
      storages: {},
      tempData: {},
      pagination: {},
      isLoading: false,
      uuid: process.env.VUE_APP_UUID,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/${this.uuid}/admin/storage?page=${page}`;
      this.$http.get(url)
        .then((res) => {
          this.isLoading = false;
          this.storages = res.data.data;
          this.pagination = res.data.meta.pagination;
        })
        .catch(() => {
          this.isLoading = false;
          Toast.fire({
            title: '資料讀取錯誤，請重新讀取',
            icon: 'error',
          });
        });
    },
    openModel(item) {
      $('#deleteModal').modal('show');
      this.tempData = { ...item };
    },
  },
};
</script>
