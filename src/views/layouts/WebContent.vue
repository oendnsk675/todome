<template>
  <div>
        <div
         class="flex h-full justify-center gap-10 mt-10 relative">
                <text-area/>
                <task-choices/>
                <content1 class="h-full"/>
                <content2/>
                <content3/>
        </div>
  </div>
</template>

<script>



import content1 from '../../components/dashboard/Content1.vue';
import content2 from '../../components/dashboard/Content2.vue';
import content3 from '../../components/dashboard/Content3.vue';
import textArea from '../../components/dashboard/Textarea.vue';
import taskChoices from '../../components/dashboard/TaskChoices.vue';


export default {
    name: 'webContent',
    components: {
        content1,
        content2,
        content3,
        textArea,
        taskChoices,
    }
}
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
#contentText::-webkit-scrollbar{
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
#contentText {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.editorx_body {
  /* width: 62%;
  margin-left: 15%; */
  /* width: 100vh; */
  /* margin-left: 20%; */
  border: 2px solid #f1f3f5;
  box-sizing: border-box;
}
.ce-block--focused {
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 0.5438550420168067) 35%,
    rgba(0, 212, 255, 1) 100%
  );
}
</style>