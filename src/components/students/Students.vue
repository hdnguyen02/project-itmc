<template>
    <div>
     
    </div>
</template>

<script>
export default {
    data(){
        return {
            listStudents:[], // dùng để chứa sinh viên sau khi gọi fetch thành công
        }
    },
    mounted () {
        // nó sẽ chạy ngay khi các node ( obecct html div gắn màn hình render)
        // gọi API ( gọi tới sở dữ liệu)
        fetch ("http://localhost:3000/ower")
            .then (repos => repos.json())
            .then (data => this.listStudents = data ) // đã lấy dữ liệu thành công.
            
        
    }
}
</script>

<style>

</style>