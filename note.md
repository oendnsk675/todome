hobie
kerja
user
eat
funs

https://freeicons.io/icon-list/hobbies-and-free-time-3?page=2
https://freeicons.io/icon-list/university-2
https://freeicons.io/icon-list/ecommerce-9?page=2

user {

    preference: {
        projects: {
            bg_color: color
            border: color
            bg_color_cards: color
            text_color_cards: color
        },
        pomodoro: {
            bg_color: color
            border: color
            btn_start_color: color
            btn_end_color: color
            btn_reset_color: color
            bg_color_current_tasks: color
            text_color_current_tasks: color
        }
    }
}

mode dark
	- bg pakek gray
	- ganti logo
	- text-color gray-50 atau white

bikin settingan default warna light
bikin settingan default warna dark

projects
	- border
	- bg-cards
	- text-cards
	- bg
pomodoro
	- border
	- bg-cards
	- text-cards
	- color start
	- color reset
	- bg-color current task
	- text current task
	- bg





ceritanya di pomodoro current tasksnya akan memunculkan dropdown, yang memilih todo list yang akan di pomodorokan, misal nanti akan kayak folder list, pertama milih project, kemudian jika mau menjalankan semuanya, atau pilih satu atau lebih


ceritanya mau bikin contribution di add projects


sampe rapiin bagian mobile project



users
    id
    name
    username(unique)
    email
    email_verification
    password
    phone number 
    googleId
    link linkidn
    link github
    link facebook
    link twiter

user_have_friends
    id
    id_user
    id_friend
    
tasks
    id
    title
    body
    icon
    isComplate
    interval
    created_at
    updated_at
    
permissions
    id
    permission
    id_user
    id_tasks