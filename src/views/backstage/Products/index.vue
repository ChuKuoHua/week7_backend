<template>
  <div>
    <loading :active.sync="isLoading">
      <i class="loading-box"></i>
    </loading>
    <div class="col-md-10 ml-sm-auto px-4 mt-5">
      <div class="text-left mr-2 mt-2 pt-2e">
        <button
          class="btn btn-add"
          @click.prevent="openModal('new')"
        >
          建立新產品
        </button>
      </div>
      <table class="table table-striped mt-2">
        <thead class="thead-col font-weight-bold">
          <tr class="text-left">
            <th width="130">
            分類
            </th>
            <th width="170">產品名稱</th>
            <th width="130">
            原價
            </th>
            <th width="130">
            售價
            </th>
            <th width="100" class="text-right">
            是否啟用
            </th>
            <th width="130" class="text-right">
            編輯
            </th>
          </tr>
        </thead>
        <tbody class="flex text-left">
          <tr v-for="item in products" :key="item.id">
            <td>{{item.category}}</td>
            <td>{{item.title}}</td>
            <td>{{item.origin_price | currency}}</td>
            <td>{{item.price | currency}}</td>
            <td class="text-right">
              <span v-if="item.enabled" class="text-success">啟用</span>
              <span v-else class="text-secondary">未啟用</span>
            </td>
            <td class="text-right">
              <button
                class="btn btn-outline-primary btn-sm mr-2"
                @click.prevent="openModal('edit',item)"
              >
                <font-awesome-icon :icon="['fa', 'edit']"/>
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                @click.prevent="openModal('delete',item)"
              >
                <font-awesome-icon :icon="['fa', 'trash']"/>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 分頁 -->
      <Pagination
        :pages="pagination"
        @changePage="getProducts"
      ></Pagination>
      <!-- 新增/編輯 -->
      <ProductModal
        ref="productModal"
        :isNew="isNew"
        @update="getProducts"
      />
      <!-- 刪除 Modal -->
      <DelProductModal
        :temp-product="tempProduct"
        @update="getProducts"
      />
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Toast from '@/components/alert/Toast';
import Pagination from '@/components/Pagination.vue';
import ProductModal from './components/ProductModal.vue';
import DelProductModal from './components/DelProductModal.vue';

export default {
  name: 'BackProducts',
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {
        imageUrl: [],
      },
      isNew: false,
      isLoading: false,
      uuid: process.env.VUE_APP_UUID,
    };
  },
  components: {
    ProductModal,
    DelProductModal,
    Pagination,
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/${this.uuid}/admin/ec/products?page=${page}`;
      this.$http.get(api)
        .then((res) => {
          this.products = res.data.data;
          this.pagination = res.data.meta.pagination;
          this.isLoading = false;
        })
        .catch(() => {
          Toast.fire({
            title: '資料讀取失敗，請稍後再試',
            icon: 'error',
          });
          this.isLoading = false;
        });
    },
    // 開啟 Modal 視窗
    openModal(type, item) {
      switch (type) {
        case 'new':
          this.$refs.productModal.tempProduct = {
            imageUrl: [],
          };
          $('#productModal').modal('show');
          this.isNew = true;
          break;
        case 'edit':
          this.isNew = false;
          this.$refs.productModal.getProduct(item.id);
          break;
        case 'delete':
          this.tempProduct = { ...item };
          $('#delProductModal').modal('show');
          break;
        default:
          break;
      }
    },
  },
};
</script>
