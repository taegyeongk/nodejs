<template>
    <div>
         <button v-on:click="addData">+</button> <!-- click : 이벤트명, addData : 속성x -->
        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>카테고리</th>
                    <th>배송비</th>
                </tr>
            </thead>
             <tbody> <!-- 반복하지 않는다 -->
                <tr v-bind:key="idx" v-for="(product, idx) in productList"> <!-- 반복 -->
                    <td>{{ product.product_name }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.category }}</td>
                    <td>{{ product.delivery_price }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    let data = [
        {
            "product_name" : "기계식키보드",
            "price" : 25000,
            "category" : "노트북/태블릿",
            "delivery_price" : 5000
        },
        {
            "product_name" : "무선마우스",
            "price" : 12000,
            "category" : "노트북/태블릿",
            "delivery_price" : 5000
        },
        {
            "product_name" : "아이패드",
            "price" : 725000,
            "category" : "노트북/태블릿",
            "delivery_price" : 5000
        },
        {
            "product_name" : "태블릿거치대",
            "price" : 32000,
            "category" : "노트북/태블릿",
            "delivery_price" : 5000
        },
        {
            "product_name" : "무선충전기",
            "price" : 42000,
            "category" : "노트북/태블릿",
            "delivery_price" : 5000
        }
    ]

    export default{
        data(){
            return {
                productList : data  //최종형태를 마무리 지어야핸
            }
        },
        methods : {
            addData(){
                let obj = {
            "product_name" : "기계식키보드",
            "price" : 25000,
            "category" : "노트북/태블릿",
            "delivery_price" : 5000
                };
                let index = this.productList.length; //배열을 담는법
                this.productList[index] = obj;
            }
            /* addData : function(){} 간략화로 같은 함수의미 */
        }
    }
</script>

<style>

</style>