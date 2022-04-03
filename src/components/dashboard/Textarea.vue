<template>
    <div
        :class="{
          'invisible opacity-0' : !stateTextArea,
          'opacity-100 transition-all duration-150 ease-out' : stateTextArea
        }" 
        @click.stop="closeAllPopUpTextarea" id="contentText" 
        class="lg:w-9/12 md:w-full h-full lg:rounded-2xl bg-gray-100 border border-gray-400 absolute z-50 overflow-y-scroll"
    >
      <div >
        <div class="relative">
          <!-- cover and icon -->
          <div :style="getPreferences()" class="w-full lg:h-32 md:h-24 relative">


            <!-- icon -->
            <div class="absolute z-20 -bottom-12 lg:left-16 md:left-4 flex flex-col items-center gap-2">
                <img :src="cover(icon)" alt="icon" class="lg:w-20 md:w-14">

                <button @click.stop="toggleSettingsColorIcon" type="button" class="border-2 border-gray-500 hover:bg-gray-400 hover:text-gray-50 transition-colors duration-300 font-Nunito rounded-lg py-0.5 lg:px-3 md:px-1 lg:text-sm md:text-xs text-gray-500"> change icon
                </button>
                <!-- menu setting background color picker -->
                <div @click.stop 
                    :class="{
                    'invisible bg-opacity-0': settingProjectUserState.cardIcon.background == false,
                    'bg-opacity-80 transition-all duration-100 ease-out': settingProjectUserState.cardIcon.background,
                    }" 
                class="w-56 py-3 px-4 absolute left-0 top-28  bg-gray-900  rounded-tr-lg rounded-bl-lg rounded-br-lg z-40">
                    <div class="flex flex-col gap-4">
                        <h1 class="text-lg text-center text-gray-100 font-Nunito font-semibold">Color Picker</h1>
                        <div class="flex items-center gap-2 justify-between flex-wrap">
                            <button @click.stop="setIcon(`${index + start}.svg`)" v-for="index in getIconPagintionSetting.limit" :key="index" class="hover:opacity-80">
                              <!-- {{index + start}} -->
                              <!-- <img :src="`../assets/icons/${index}.jpg`"  alt=""> -->
                              <img :src="cover(`${index + start}.svg`)"  alt="">
                            </button>

                        </div>
                        <div class="flex items-center gap-2 justify-center">
                          <button @click="decrementPaginate()" class=" mt-3 flex justify-center w-6 h-6 rounded-sm items-center bg-gray-400">
                            <img src="@/assets/img/arrow.svg" class="w-3" alt="">
                          </button>
                          <button @click="incrementPaginate()" class=" mt-3 flex justify-center w-6 h-6 rounded-sm items-center bg-gray-400">
                            <img src="@/assets/img/arrow.svg" class="w-3 transform rotate-180" alt="">
                          </button>
                        </div>
                    </div>
                </div>
                <!-- menu setting background color picker -->
            </div>
            <!-- /icon -->

            <!-- close -->
            <button @click="closeAllPopUp()" class="bg-gray-600 bg-opacity-75 absolute p-3 right-0 md:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-gray-50" width="16" height="16" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
            </button>
            <!-- close -->


            <!-- setting color -->
            <div class="flex justify-end gap-2 absolute right-2 bottom-2">
              <div class="flex gap-3 z-50 md:fixed md:bottom-4 md:right-6">
                <!-- btn close -->
                <button @click="closeAllPopUp()" class="border-2 lg:hidden border-gray-500  hover:bg-gray-400 hover:text-gray-50 transition-colors duration-300 font-Nunito rounded-xl py-1 px-4">Close</button>
                <!-- /btn close -->
                

                <!-- btn save -->
                <button @click="save()" class="border border-gray-50 hover:bg-gray-400 hover:text-gray-50 transition-colors duration-300 font-Nunito rounded-xl py-1 text-sm px-4">Save</button>
                <!-- /btn save -->
              </div>
                <button @click.stop="toggleSettingsColorCard" class="lg:px-2 md:px-1 py-1 text-xs border border-gray-100 text-gray-100 hover:border-gray-700 hover:bg-gray-100 hover:text-gray-700 transition-colors duration-300 rounded-lg ">Change color card</button>
            </div>
            <!-- menu setting background color picker -->
            <div @click.stop 
                :class="{
                'invisible bg-opacity-0': settingProjectUserState.cardColor.background == false,
                'bg-opacity-80 transition-all duration-100 ease-out': settingProjectUserState.cardColor.background,
                }" 
            class="w-56 py-3 px-4 absolute right-2 lg:top-32 md:top-24 bg-gray-900  rounded-tl-lg rounded-bl-lg rounded-br-lg z-40">
                <div class="flex flex-col gap-4">
                    <h1 class="text-lg text-center text-gray-100 font-Nunito font-semibold">Color Picker</h1>
                    <div class="flex items-center justify-around">
                        <button @click.stop="setBgCard({id, color:'transparent'})" class="w-8 h-8 border rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBgCard({id, color:'#676FA3'})" class="w-8 h-8 bg-color_custom2 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBgCard({id, color:'#CDDEFF'})" class="w-8 h-8 bg-color_custom3 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBgCard({id, color:'#DB6B97'})" class="w-8 h-8 bg-color_custom4 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBgCard({id, color:'#20ABB5'})" class="w-8 h-8 bg-color_custom5 rounded-full hover:opacity-80"></button>
                    </div>
                    <div class="flex items-center justify-around">
                        <button @click.stop="setBgCard({id, color:'#F2FFE9'})" class="w-8 h-8 bg-color_custom6 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBgCard({id, color:'#557C55'})" class="w-8 h-8 bg-color_custom7 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBgCard({id, color:'#146356'})" class="w-8 h-8 bg-color_custom8 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBgCard({id, color:'#30475E'})" class="w-8 h-8 bg-color_custom9 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBgCard({id, color:'#121212'})" class="w-8 h-8 bg-color_custom10 rounded-full hover:opacity-80"></button>
                    </div>
                    <div class="flex items-center justify-around">
                        <button @click.stop="setBgCard({id, color:'#C84B31'})" class="w-8 h-8 bg-color_custom11 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBgCard({id, color:'#F2789F'})" class="w-8 h-8 bg-color_custom12 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBgCard({id, color:'#97BFB4'})" class="w-8 h-8 bg-color_custom13 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBgCard({id, color:'#4C0070'})" class="w-8 h-8 bg-color_custom14 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBgCard({id, color:'#B42DC9'})" class="w-8 h-8 bg-color_custom15 rounded-full hover:opacity-80"></button>
                    </div>
                </div>
            </div>
            <!-- menu setting background color picker -->
            <!-- setting color -->
          </div>
          <!-- /cover and icon -->

          <!-- teams -->
          <div class="lg:pr-10 md:pr-2">
          <div class="mt-4 flex items-center relative justify-end">
              <span class="text-sm font-semibold font-Nunito">Teams :</span>
              <div class="flex lg:ml-6 md:ml-4 gap-1">
              <div class="lg:w-8 lg:h-8 md:w-6 md:h-6 overflow-hidden rounded-full border border-gray-700">
                  <img src="@/assets/img/user/osi.png" alt="icon contributors">
              </div>
              <button class="lg:w-8 lg:h-8 md:w-6 md:h-6 overflow-hidden hover:opacity-75 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <g id="plush" transform="translate(-461 -365)">
                          <circle id="Ellipse_2" data-name="Ellipse 2" cx="10" cy="10" r="10" transform="translate(461 365)" fill="#b5b1b1"/>
                          <rect id="Rectangle_1" data-name="Rectangle 1" width="12" height="2" transform="translate(465 374.5)" fill="#fff"/>
                          <rect id="Rectangle_2" data-name="Rectangle 2" width="12" height="2" transform="translate(472 369.5) rotate(90)" fill="#fff"/>
                      </g>
                  </svg>
              </button>
              </div>
          </div>

          <!-- input add team -->
          <div class="mt-2 flex items-center relative justify-end invisible opacity-0">
              <input type="text" class="bg-transparent border border-l-0 border-r-0 border-t-0 border-gray-300 focus:outline-none" placeholder="username">
          </div>
          <!-- /input add team -->
          </div>
          <!-- /teams -->
      

          <!-- body textarea -->
          <div class="pt-12 lg:px-40 md:px-5 mb-5">
            <!-- title -->
            <input type="text" @input="onChangeTitle" v-model="title" class="bg-transparent border py-1 px-2 border-l-0 border-r-0 border-t-0 border-gray-300 w-full focus:outline-none text-xl text-gray-600 font-Nunito font-semibold" placeholder="Write your title is hare">
            <!-- /title -->
            
            <!-- editorJs -->
            <div class="editorx_body w-full mt-4">
                <!--editorjs id-->
                <div class="font-Nunito" id="codex-editor"/>
            </div>
            <!-- editorJs -->

          </div>
          <!-- /body textarea -->
        </div>

        </div>
    </div>
    
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex"
import {debounce} from 'lodash'
import Header from "@editorjs/header";
import EditorJS from "@editorjs/editorjs";
import List from '@editorjs/list';
import CodeTool from '@editorjs/code'
import Paragraph from '@editorjs/paragraph'
import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import Checklist from '@editorjs/checklist'
import Marker from '@editorjs/marker'
import Warning from '@editorjs/warning'
import RawTool from '@editorjs/raw'
import Quote from '@editorjs/quote'
import InlineCode from '@editorjs/inline-code'
import Delimiter from '@editorjs/delimiter'

export default {
    name: 'textarea',
    data: function () {
      return {
        title: this.temp_title, // this is data title local
        id: 0,
        icon: '',
        default_color_cards: 
        {
          backgroundColor: "#87A5A6",
          "color" : "white",
        },
        dataEditor: {
          blocks: []
        }
      }
    },
    computed: {
        ...mapGetters({
          projectStyle:'projects/projectStyle', 
          getLastId:'projects/getLastId', 
          settingProjectUserState: 'textarea/settingProjectUserState',
          stateTextArea: 'textarea/stateTextArea',
          getIconPagintionSetting: 'textarea/getIconPagintionSetting',
          getNameContent: 'textarea/getNameContent',
          getDataEditorProjects: 'projects/getDataEditorProjects',
          getDataEditorImportant: 'important/getDataEditorImportant',
          importantStyle:'important/importantStyle', 
        }),
        countPage(){
          let pagination = this.getIconPagintionSetting
          let total = pagination.total
          let limit = pagination.limit
          // console.table(total, limit, total / limit);
          return Math.floor(total / limit) 
        },
        start(){
          return (this.getIconPagintionSetting.limit * this.getIconPagintionSetting.active) - this.getIconPagintionSetting.limit
        },
        ...mapState({
          temp_title: state => state.projects.temp_title,
        })
    },
    watch: {
      // temp_title(){}
      stateTextArea(cond){
        if (!cond) {
          // console.log(`id di textarea: ${this.id}, ${this.icon}, ${this.title} and typeof(${typeof(this.icon)}), typeof(${typeof(this.title)})`);
          if (this.icon != '' || this.title != '') {
            if (this.title != undefined) {
              // console.log(`hell yeah ${this.icon} : ${this.title}`);
              this.id += 1
              // console.log(`hell id ${this.id}`);
            }
          }
          window.editor.clear()
          this.changeTemp_title()
          this.title = ''
          this.icon = ''
        }
        // console.log(cond);
      },
      getDataEditorProjects(data){
        let blocks = []
        // console.log(data, "ini data");
        try {
          if (Object.keys(data).length != 0) {
            this.id = data.id_editorjs
            this.title = data.title
            this.icon = data.icon
            // this.default_color_cards = data.default_color_card
            this.mode = true
            data.body.forEach(element => {
                blocks.push({
                  type: element.type,
                  data: element.data
                })
            });
            window.editor.render(
              {
                blocks
              }
            )
          }
        } catch (error) {
          // console.log(typeof(data));
        }
        // this.dataEditor.blocks = listData
      },
      getDataEditorImportant(data){
        let blocks = []
        console.log(data, "ini data");
        try {
          if (Object.keys(data).length != 0) {
            this.id = data.id_editorjs
            this.title = data.title
            this.icon = data.icon
            // this.default_color_cards = data.default_color_card
            this.mode = true
            data.body.forEach(element => {
                blocks.push({
                  type: element.type,
                  data: element.data
                })
            });
            window.editor.render(
              {
                blocks
              }
            )
          }
        } catch (error) {
          // console.log(typeof(data));
        }
        // this.dataEditor.blocks = listData
      },
    },
    methods: {
      ...mapMutations({
        closeAllPopUp: 'textarea/closeAllPopUp', 
        toggleSettingsColorCard: 'textarea/toggleSettingsColorCard', 
        toggleSettingsColorIcon: 'textarea/toggleSettingsColorIcon', 
        closeAllPopUpTextarea: 'textarea/closeAllPopUpTextarea',
        incrementPaginate: 'textarea/incrementPaginate',
        decrementPaginate: 'textarea/decrementPaginate',
        updateStateChange: 'textarea/updateStateChange',
        changeTemp_title: 'projects/changeTemp_title',
      }),
      ...mapActions({
        saveContent: 'textarea/saveContent',
        setBgColorCard: 'textarea/setBgColorCard',
      }),
      getDataEditor(){
        if (this.getNameContent == "projects") {
          return this.projectStyle.default_color_card
        }else if(this.getNameContent == "important"){
          return this.importantStyle.default_color_card
        }
      },
      getPreferences(){
        if (this.getNameContent == "projects") {
          return this.projectStyle.default_color_card
        }else if(this.getNameContent == "important"){
          return this.importantStyle.default_color_card
        }
      },
      setIcon(icon){
        this.icon = icon
        this.save()
      },
      setBgCard(color){
        this.default_color_cards.backgroundColor = color.color
        this.setBgColorCard(color)
        this.save()
      },
      cover(url) {
        // console.log(`url: ${url}`);
          if (url !== ''){ // You can check any matching expression.
              try {
                  url = require('@/assets/icons/' + url)
              } catch (e) {
                  url = require('@/assets/icons/1.svg'); // I used a default image. 
              }
          }
          else
              url = require('@/assets/icons/1.svg'); // Default image. 
          return url;
      },
      save() {
            window.editor.save().then(savedData => {
                  // console.log(savedData);
                  let timestamp = savedData.time
                  let date = new Date(timestamp)
                  let updated = date.getDate()+'-'+date.getMonth()+'-'+date.getFullYear()+ ' ' +date.getHours() +':'+ date.getMinutes() +':'+ date.getSeconds()
                  if (savedData.blocks.length > 0) {
                    let data = {
                      id_editorjs: this.id, 
                      title: this.title,
                      body: savedData.blocks,
                      icon: this.icon,
                      isComplete: false,
                      timerCount: {
                        timerEnabled: false,
                        time: 5
                      },
                      interval: null,
                      updated
                    }
                    
                    this.saveContent(data)
                    this.$swal({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: '1500',
                        timerProgressBar: true,
                        icon: 'success',
                        text: 'saved successfully',
                        didOpen: (toast) => {
                          toast.addEventListener('mouseenter', this.$swal.stopTimer)
                          toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                        }
                    });
                  } else {
                    this.saveContent({
                      id_editorjs: this.id,
                      title: this.title != '' ? this.title : 'untitle',
                      body: '',
                      icon: this.icon,
                      isComplete: false,
                      timerCount: {
                        timerEnabled: false,
                        time: 5
                      },
                      interval: null,
                      updated
                    })

                    this.$swal({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: '1500',
                        timerProgressBar: true,
                        icon: 'success',
                        text: 'saved successfully',
                        didOpen: (toast) => {
                          toast.addEventListener('mouseenter', this.$swal.stopTimer)
                          toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                        }
                    });
                  }
            });   
        // }
      },
      onChangeTitle: function(){
        // change state, editor has not been saved
        this.updateStateChange(true)
        this.changeTemp_title(this.title)
        this.save()
      },
      myEditor: function() {
        window.editor = new EditorJS({
          holder: "codex-editor",
          autofocus: false,
          /**
           * This Tool will be used as default
           */
          initialBlock: "paragraph",
          tools: {
              list: {
                class: List,
                inlineToolbar: true,
              },
              code: {
                class: CodeTool
              },
              header: {
                class: Header
              },
              paragraph: {
                class: Paragraph,
                config: {
                  placeholder: "Write your idea is here"
                }
              },
              embed: {
                class: Embed,
                config: {
                  services: {
                    youtube: true,
                    coub: true,
                    imgur: true
                  }
                }
              },
              table: {
                class: Table,
                inlineToolbar: true,
                config: {
                  rows: 2,
                  cols: 3,
                },
              },
              checklist: {
                class: Checklist,
              },
              Marker: {
                class: Marker,
                shortcut: 'CMD+SHIFT+M',
              },
              warning: {
                class: Warning,
                inlineToolbar: true,
                shortcut: 'CMD+SHIFT+W',
                config: {
                  titlePlaceholder: 'Title',
                  messagePlaceholder: 'Message',
                },
              },
              raw: RawTool,
              quote: {
                class: Quote,
                inlineToolbar: true,
                shortcut: 'CMD+SHIFT+O',
                config: {
                  quotePlaceholder: 'Enter a quote',
                  captionPlaceholder: 'Quote\'s author',
                },
              },
              inlineCode: {
                class: InlineCode,
                shortcut: 'CMD+SHIFT+M',
              },
              delimiter: Delimiter
          },
          // data: this.dataEditor,
          onReady: function() {
            // console.log("ready");
          },
          onChange: this.debouncedWatch
          });
      }
    },
    mounted: function() {
      this.myEditor()
      // take the last id which is obtained from how many tasks in the list
      this.id = this.getLastId + 1
    },
    created(){
      // console.log('haha');
      this.debouncedWatch = debounce(() => {
                window.editor.save().then(savedData => 
                {
                  // console.log(savedData);
                  let timestamp = savedData.time
                  let date = new Date(timestamp)
                  let updated = date.getDate()+'-'+date.getMonth()+'-'+date.getFullYear()+ ' ' +date.getHours() +':'+ date.getMinutes() +':'+ date.getSeconds() 
                  // console.log(updated);
                  // console.log(this.title);
                  if (savedData.blocks.length > 0) {
                    let data = {
                      id_editorjs: this.id,
                      title: this.title != '' ? this.title : 'untitles',
                      body: savedData.blocks,
                      icon: this.icon,
                      isComplete: false,
                      timerCount: {
                        timerEnabled: false,
                        time: 5
                      },
                      interval: null,
                      updated
                    }
                    // console.log(savedData.blocks[0].data.text);
                    // this.updateStateChange(false)
                    this.saveContent(data)
                  } else {
                    if (this.stateTextArea) {
                      this.saveContent({
                        id_editorjs: this.id,
                        title: this.title != '' ? this.title : 'untitle',
                        body: '',
                        icon: this.icon,
                        isComplete: false,
                        timerCount: {
                          timerEnabled: false,
                          time: 5
                        },
                        interval: null,
                        updated
                      })  
                    }
                    // this.updateStateChange(false)
                    // console.log(savedData);
                  }
                })
              }, 1000)
    }

}
</script>

<style>

</style>