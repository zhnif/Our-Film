/* ═══════════════════════════════════════════════════════ OUR 
   LITTLE CINEMA — script.js Complete interactive film 
   experience
═══════════════════════════════════════════════════════ */

/* ───────────────────────────────────────────────────── 
   CONFIGURATION — Edit these values
───────────────────────────────────────────────────────*/ 
const CONFIG = {
  yourName: "zhnif_", // ← Change this to your name herName: 
  "Naurah Jannah Alice Mufidah", // ← Change this to her name 
  birthday: "December 14", // ← Change this (e.g., "October 
  14")
};

/* ───────────────────────────────────────────────────── 
   MESSAGE DATABASE — 50+ unique messages Organized by 
   category. Edit freely.
───────────────────────────────────────────────────────*/ 
const MESSAGES = {
  tired: [ `Kamu tidak harus baik-baik saja hari ini. Sungguh, 
    tidak harus.

Ada tekanan yang sering kita bawa—ekspektasi tak terlihat 
bahwa kita seharusnya bisa menangani semuanya, bahwa istirahat 
adalah sesuatu yang harus kita dapatkan, bahwa rasa lelah 
adalah semacam kegagalan pribadi. Padahal tidak. Kamu manusia, 
bukan mesin. Kamu boleh kehabisan tenaga.

Apa pun yang membuatmu lelah—entah itu satu hal yang sangat 
besar atau seratus hal kecil yang menumpuk—aku ingin kamu tahu 
bahwa perasaan itu valid. Kamu tidak harus menjelaskannya, 
membenarkannya, atau meminta maaf karenanya. Ada hari-hari 
yang memang mengambil lebih banyak daripada yang mereka 
berikan.

Jadi, ini yang ingin aku kamu lakukan sekarang: letakkan satu 
hal. Bukan semuanya. Hanya satu hal yang sedang kamu bawa dan 
sebenarnya bisa menunggu. Hal itu akan tetap ada ketika 
energimu sudah lebih banyak untuk menghadapinya lagi. Tapi 
sekarang, kamu tidak perlu membawa semuanya sekaligus.

Aku melihat betapa kerasnya kamu berusaha. Aku melihat 
seberapa banyak yang kamu berikan. Dan aku ingin kamu tahu 
bahwa aku tidak sedang menghitungnya, tapi kalaupun aku 
menghitung—kamu sudah memberikan lebih dari cukup.

Istirahat bukan berarti menyerah. Istirahat adalah cara untuk 
kembali.`,

    `Lelah bukan berarti kamu lemah. Itu berarti kamu sudah 
    lama menjadi kuat tanpa dukungan yang cukup.

Ada sesuatu yang kadang kupikirkan—bagaimana kamu tetap 
berjalan bahkan di hari-hari ketika rasanya tidak ada lagi 
yang tersisa. Aku tidak mengatakan itu untuk menambah tekanan. 
Aku mengatakannya karena menurutku kamu sering meremehkan 
betapa luar biasanya hal itu.

Kamu sudah melewati setiap hari sulit yang pernah kamu jalani. 
Setiap satu pun. Ada versi dirimu yang sudah berhasil melewati 
hal-hal yang dulu terasa tidak mungkin dilewati. Dia masih ada 
di dalam dirimu. Dia tidak hilang. Dia hanya sedang 
beristirahat.

Ketika rasa lelah terasa sampai ke tulang dan tidak mau pergi, 
aku ingin kamu ingat bahwa aku tidak mengharapkan apa pun 
darimu sekarang. Bukan performa, bukan kemajuan, bukan 
keharusan untuk baik-baik saja. Hanya kamu. Hanya 
keberadaanmu. Itu sudah cukup. Kamu sudah cukup.

Kembalilah ketika kamu siap. Aku akan tetap di sini.`,

    `Aku tahu rasa lelah yang tidak bisa diperbaiki hanya 
    dengan tidur. Rasa lelah yang tinggal di dadamu, bukan di 
    tubuhmu.

Rasa lelah itu sedang memberitahumu sesuatu yang penting—bukan 
bahwa kamu gagal, tetapi bahwa ada sesuatu yang perlu 
diperhatikan. Mungkin sesuatu yang selama ini kamu tunda. 
Mungkin sesuatu yang pura-pura tidak ada. Atau mungkin hanya 
fakta sederhana bahwa kamu sudah menjaga semua orang dan 
segala sesuatu kecuali dirimu sendiri.

Aku ingin memberimu izin untuk berhenti memaksakan diri 
sebentar. Bukan selamanya. Hanya untuk sekarang.

Kamu tidak harus menyelesaikan apa pun hari ini. Kamu tidak 
harus memecahkan hal-hal yang terasa berat atau membuat 
rencana untuk keluar dari semuanya. Kamu hanya perlu ada 
sebentar. Bernapas. Biarkan beberapa hal tetap belum 
terselesaikan selama beberapa jam.

Dunia tidak akan runtuh hanya karena kamu beristirahat. Aku 
janji.`,

    `Rasa lelah yang kamu rasakan itu nyata. Tolong jangan 
    berdebat dengan dirimu sendiri tentang apakah kamu "boleh" 
    merasakannya.

Kadang kita membuat standar yang mustahil untuk diri 
sendiri—seolah kita harus bisa terus berjalan tanpa batas, 
bahwa melambat berarti malas, bahwa merasa terkuras berarti 
kita melakukan sesuatu yang salah. Tidak ada yang benar. Semua 
itu hanya kebisingan.

Kamu adalah seseorang yang berusaha sangat keras. Aku 
melihatmu berusaha. Dan menurutku, salah satu hal yang 
membuatmu lelah adalah kamu paling keras berusaha pada hal-hal 
yang tidak selalu mengembalikan apa yang sudah kamu 
berikan—perasaan orang lain, situasi yang mustahil, hasil yang 
tidak sepenuhnya bisa kamu kendalikan.

Yang ingin aku kamu tahu sederhana: kamu tidak harus tampil 
sempurna sekarang. Tidak untukku, tidak untuk siapa pun. Momen 
ini, apa adanya—sedikit lelah, sedikit terkuras—tetap menjadi 
momen yang membuatku senang bisa menjalaninya bersamamu.

Istirahat. Kamu sudah berhak mendapatkannya berkali-kali 
lipat.`,

    `Ada hari-hari ketika beratnya sekadar menjalani hidup 
    terasa lebih berat daripada seharusnya.

Di hari-hari seperti itu, aku ingin kamu tahu bahwa aku tidak 
berada di sisi lain dari sebuah garis tak terlihat untuk 
mengawasi dan menghakimi. Aku ada di sana bersamamu, atau 
sedekat yang bisa kulakukan. Aku melihat usaha yang terkadang 
kamu perlukan hanya untuk bangun, untuk tetap hadir, untuk 
terus berjalan.

Kamu tidak perlu menjelaskannya kepadaku. Kamu tidak perlu 
membuat semuanya masuk akal.

Yang ingin kuminta darimu di hari seperti ini hanya satu hal 
kecil: bersikap sedikit lebih lembut kepada dirimu sendiri 
daripada biasanya. Bicaralah kepada dirimu seperti kamu 
berbicara kepada seseorang yang kamu sayangi. Kamu tidak akan 
pernah mengatakan kepada orang yang kamu sayangi bahwa mereka 
lemah karena lelah. Kamu akan menyuruh mereka beristirahat. 
Kamu akan mengatakan bahwa semuanya tidak apa-apa.

Jadi katakan itu kepada dirimu sendiri. Tidak apa-apa. 
Istirahat itu tidak apa-apa. Kamu baik-baik saja. Bahkan saat 
lelah, kamu tetap baik-baik saja.`,

    `Kelelahan punya jenis beratnya sendiri. Kelelahan membuat 
    segala sesuatu terasa lebih sulit—lebih sulit untuk sabar, 
    lebih sulit untuk tetap optimis, lebih sulit untuk merasa 
    menjadi dirimu sendiri.

Ketika itu terjadi, aku ingin kamu ingat bahwa versi dirimu 
yang hadir dalam keadaan lelah tetaplah kamu. Bukan versi yang 
lebih rendah atau versi yang rusak. Hanya versi yang sedang 
membutuhkan sesuatu yang berbeda sekarang.

Dan menurutku, yang dibutuhkan bukan solusi, rencana, atau 
daftar tindakan. Yang dibutuhkan adalah kelembutan. 
Keheningan. Sebuah momen ketika kamu tidak dituntut melakukan 
apa pun.

Aku tahu aku tidak selalu bisa memberimu itu dengan cara yang 
kamu layak dapatkan. Tapi aku bisa mengatakan bahwa ketika 
kamu perlu sedikit berantakan, aku lebih memilih kamu 
melakukannya bersamaku daripada sendirian. Aku lebih memilih 
menerima versi dirimu yang berantakan dan lelah daripada tidak 
pernah menerimamu sama sekali.

Kamu berarti bagiku dalam segala keadaanmu. Bukan hanya saat 
kamu cerah dan penuh energi.`,

    `Merasa lelah bukan berarti kamu tidak melakukan cukup 
    banyak. Bisa jadi justru kamu sudah melakukan terlalu 
    banyak.

Ada jenis kelelahan yang muncul karena kamu terus mencurahkan 
dirimu ke segala arah—memberi kepada orang-orang yang tidak 
selalu memberi kembali, peduli pada hal-hal yang tidak selalu 
membalas kepedulianmu, menuntut dirimu dengan standar yang 
sebenarnya tidak dituntut siapa pun selain dirimu sendiri.

Kalau itu jenis lelah yang sedang kamu rasakan, aku ingin 
menyarankan dengan lembut: kamu boleh melepaskan sebagian dari 
itu. Bukan selamanya, bukan sepenuhnya—hanya cukup untuk 
bernapas.

Kamu tidak berkewajiban menjaga semuanya tetap berjalan setiap 
saat. Kamu tidak mengecewakan siapa pun hanya karena memiliki 
batas. Kamu adalah manusia dengan energi yang terbatas, dan 
kamu berhak menjaganya.

Gunakan sebagian energi itu untuk dirimu sendiri hari ini. 
Bukan karena kamu sudah mendapatkannya. Karena energi itu 
memang milikmu, dan kamu berhak menyimpan sebagian untuk 
dirimu.`,

    `Istirahat bukan hadiah. Bukan sesuatu yang harus kamu 
    dapatkan setelah melakukan cukup banyak, mencapai cukup 
    banyak, atau membantu cukup banyak.

Istirahat hanyalah sesuatu yang kamu butuhkan. Seperti air. 
Seperti tidur. Seperti ketenangan.

Dan aku tahu secara logika kamu memahami ini. Tapi aku juga 
tahu bahwa terkadang pengetahuan dan perasaan adalah dua hal 
yang sangat berbeda, dan mengetahui bahwa sesuatu baik untukmu 
tidak selalu membuatnya mudah dilakukan.

Jadi aku akan mengatakannya dengan sederhana: apa pun yang 
belum kamu selesaikan masih bisa menunggu. Apa pun yang terasa 
membutuhkan perhatianmu sekarang—sebagian besarnya bisa 
menunggu beberapa jam sementara kamu membiarkan dirimu diam.

Hari ini kamu sudah memberikan apa pun yang mampu kamu 
  berikan. Itu harus cukup. Biarkan itu cukup. Aku 
  menyayangimu, entah kamu mencapai sesuatu atau tidak.`, ],

  sad: [ `Kesedihan bukan berarti tidak adanya cinta. 
    Terkadang justru kesedihan muncul karena cinta itu 
    ada—cinta pada bagaimana sesuatu dulu berjalan, pada 
    bagaimana kamu berharap semuanya akan berjalan, atau pada 
    orang-orang dan versi kehidupan yang tidak berakhir 
    seperti yang kamu butuhkan.

Kalau kamu sedang sedih hari ini, aku tidak akan mencoba 
berdebat agar kamu keluar darinya. Aku tidak akan memberimu 
daftar alasan untuk merasa lebih baik. Aku hanya akan duduk di 
sini bersamamu, sedekat yang bisa dicapai oleh kata-kata.

Merasakan sesuatu sedalam ini—itu bukan kekurangan. Itu 
berarti kamu hidup dengan cara yang paling nyata. Itu berarti 
ada hal-hal yang penting bagimu. Kemampuan untuk merasa itu 
adalah hal yang sama yang membuatmu begitu berharga. Dan itu 
tetap benar bahkan ketika perasaan itu menyakitkan.

Menangislah kalau perlu. Biarkan perasaan itu melewatimu 
daripada menahannya seolah-olah itu sesuatu yang memalukan. 
Dan ketahuilah bahwa di sisi lain dari ini—berapa pun waktu 
yang dibutuhkan untuk sampai ke sana—aku masih akan ada di 
sini.

Kamu tidak sendirian dalam hal ini. Sungguh. Bahkan dalam 
keheningan, bahkan dalam jarak di antara kita sekarang—aku 
bersamamu.`,

    `Ada hari-hari ketika kesedihan tidak punya alasan, dan 
    itu justru yang paling sulit.

Karena setidaknya kalau kamu tahu alasannya, kamu bisa mencoba 
memperbaikinya, menjelaskannya, atau mencari jalan di 
sekitarnya. Tapi ketika kesedihan itu datang seperti cuaca, 
ketika ia hanya ada tanpa nama—itu bisa terasa sangat 
membingungkan.

Aku ingin kamu tahu: kamu tidak membutuhkan alasan. Kamu tidak 
harus membenarkan perasaanmu kepada siapa pun, termasuk kepada 
dirimu sendiri. Emosi tidak selalu logis. Perasaan tidak 
membutuhkan hubungan sebab-akibat agar menjadi nyata.

Apa yang kamu rasakan sekarang itu nyata. Dan itu akan 
berubah. Selalu begitu—bukan karena kamu memaksanya atau 
memikirkannya sampai hilang, tetapi karena perasaan memang 
bergerak. Perasaan bukan bangunan yang permanen. Mereka lebih 
seperti pasang-surut air.

Kamu akan kembali dari sini. Kamu selalu berhasil. Aku sudah 
melihatnya. Dan aku akan terus melihatmu, selama kamu 
mengizinkanku.`,

    `Ada kesedihan yang sunyi. Ia tidak mengumumkan 
    kedatangannya. Ia hanya berada di balik matamu dan membuat 
    semuanya terasa sedikit lebih jauh dari biasanya.

Kalau itu yang sedang kamu rasakan hari ini, aku hanya ingin 
berkata: tidak apa-apa. Kamu tidak harus menerjemahkannya 
menjadi kata-kata atau membuatnya mudah dipahami orang lain. 
Ada hal-hal yang memang hanya perlu dirasakan, bukan 
dijelaskan.

Yang kuinginkan untukmu sekarang adalah hal yang juga 
kuinginkan untuk diriku sendiri di hari seperti itu: sebuah 
tempat yang lembut. Sesuatu yang menenangkan. Sesuatu yang 
tidak menuntut apa pun darimu.

Mungkin selimut dan jendela. Mungkin lagu yang sudah kamu 
dengar seribu kali. Mungkin hanya pengetahuan bahwa ada 
seseorang di luar sana yang sedang memikirkanmu dengan penuh 
perhatian.

Aku sedang melakukannya. Sekarang juga, aku sedang 
memikirkanmu.`,

    `Aku tahu kesedihan bisa membuat semuanya terasa lambat 
    dan sedikit kehilangan warna—seperti hidup sedang dilihat 
    melalui sesuatu yang kelabu.

Aku tidak akan menyuruhmu melihat sisi baiknya, karena ketika 
kamu sedang berada di tengah-tengahnya, itu justru bisa 
membuat semuanya terasa lebih buruk. Aku akan memberitahumu 
sesuatu yang lebih berguna:

Kamu sudah melewati setiap hari sedih yang pernah kamu jalani. 
Bukan sekadar melewatinya—kamu selalu berhasil kembali. Kamu 
sudah kembali dari hal-hal yang, ketika berada di dalamnya, 
terlihat seperti tidak punya jalan keluar. Dan kamu selalu 
menemukan jalan itu.

Ini bukan akhir dari apa pun. Ini hanya sebuah bab yang sulit. 
Dan setiap bab akan berakhir.

Ketika bab ini selesai, aku akan menjadi salah satu orang yang 
kamu temui di sisi lainnya. Kita bisa membicarakan semua yang 
kamu pelajari dari sini—atau kita tidak perlu membicarakannya 
sama sekali. Kita bisa terus melangkah bersama, karena itu 
adalah sesuatu yang kita lakukan dengan baik.`,

    `Menjadi sedih bukanlah kekurangan dalam dirimu. Ini 
    adalah pengalaman manusia. Dan kamu sangat, sangat 
    manusia—dalam cara yang terbaik.

Aku menyadari sesuatu tentangmu: kamu merasakan banyak hal 
dengan dalam. Kamu tidak bisa begitu saja mengubahnya. Itu 
bagian dari dirimu. Dan kedalaman yang sama itulah yang 
membuatmu penuh empati, peka, dan begitu berarti untuk 
dicintai.

Jadi kesedihan hanyalah sisi lain dari semua hal itu. Bukan 
hukuman. Bukan tanda bahwa ada yang salah denganmu. Hanya sisi 
lain dari koin yang sama.

Kamu akan baik-baik saja. Bukan karena aku 
mengatakannya—tetapi karena sebelumnya kamu sudah baik-baik 
saja setelah melewati hal-hal yang dulu terlihat seolah tidak 
akan membiarkanmu kembali. Kamu tahu bagaimana menemukan jalan 
pulang.

Dan kali ini, seperti setiap kali sebelumnya, kamu akan 
berhasil.`,

    `Aku benci melihatmu sedih. Aku ingin memperbaikinya dan 
    aku tahu aku tidak bisa, dan itu sendiri terasa berat.

Tapi ini yang bisa kulakukan: aku bisa memberitahumu bahwa aku 
sedang memikirkanmu. Bahwa kesedihanmu berarti bagiku bukan 
sebagai sesuatu yang harus diselesaikan, melainkan sesuatu 
yang bisa ditemani. Bahwa aku tidak mengharapkanmu untuk 
segera kembali seperti biasa atau memasang wajah seolah 
semuanya baik-baik saja.

Yang kuharapkan darimu adalah tidak ada apa-apa. Benar-benar 
tidak ada. Hanya untuk ada, merasakan apa yang kamu rasakan, 
dan membiarkan hari ini menjadi apa yang memang perlu 
dijalaninya.

Terkadang proses pulih memang terlihat seperti itu—seperti 
tidak memaksakan apa pun. Seperti membiarkan perasaan menjadi 
perasaan tanpa melawannya.

Aku di sini. Bahkan dalam keheningan, aku di sini.`,

    `Di hari-hari ketika kesedihan datang tanpa diundang, aku 
    ingin kamu memperlakukan dirimu seperti seorang tamu yang 
    membutuhkan perhatian.

Berikan dirimu apa yang akan kamu berikan kepada seseorang 
yang kamu sayangi di hari yang sulit. Minuman hangat. Tempat 
yang nyaman. Tanpa tuntutan. Hanya kelembutan. Kamu layak 
mendapatkan perhatian itu—bukan ketika kamu berhasil 
mendapatkannya atau memenuhi standar yang mustahil, tetapi 
selalu, secara otomatis, sebagai sesuatu yang seharusnya.

Dunia akan tetap ada ketika kamu siap kembali. Dunia tidak 
akan ke mana-mana. Tapi kesejahteraanmu adalah sesuatu yang 
perlu kamu jaga secara aktif, bahkan terkadang dari dirimu 
sendiri.

Jadi jagalah itu hari ini. Biarkan kesedihan ada tanpa 
menambahkan rasa malu di atasnya. Hanya kesedihan—tidak lebih.

Aku menyayangimu melalui semuanya.`,

    `Kesedihan terkadang datang karena sesuatu itu berarti. 
    Karena kamu peduli pada sesuatu, seseorang, atau pada 
    sebuah kemungkinan tentang bagaimana semuanya seharusnya 
    berjalan. Itu bukan kekurangan. Itulah artinya menjadi 
    seseorang yang bisa mencintai.

Dan kamu memang mencintai—dengan jelas, tulus, tanpa 
menghitung-hitung. Aku melihatnya. Aku selalu melihatnya.

Kamu pantas mendapatkan kualitas perhatian yang sama seperti 
yang kamu berikan. Kamu pantas memiliki seseorang yang 
menemanimu di hari-hari sulit, yang tidak memaksamu terlihat 
baik-baik saja, yang hanya hadir bersamamu dalam apa pun yang 
sedang kamu rasakan.

Aku sedang berusaha menjadi orang itu untukmu, bahkan dari 
sini, bahkan melalui semua ini. Ketahuilah bahwa aku sedang 
memikirkanmu dengan seluruh kelembutan yang kupunya.

Ini akan berlalu. Kamu tahu itu. Dan aku akan tetap di sini 
  ketika semuanya sudah berlalu.`, ],

  overthinking: [ `Aku tahu otakmu sedang bekerja sangat keras 
    sekarang.

Aku tahu ia terus memutar semuanya, mencari sudut pandang 
baru, mengulang percakapan di kepala, memetakan setiap 
kemungkinan buruk agar bisa bersiap menghadapinya. Aku tahu 
mungkin rasanya seperti sedang melakukan sesuatu yang berguna.

Padahal tidak. Kamu sedang menguras dirimu untuk 
masalah-masalah yang mungkin tidak pernah datang.

Terlalu banyak berpikir hanyalah ketakutan yang memakai topeng 
persiapan. Rasanya seperti kendali, padahal sebenarnya justru 
ketiadaan kendali—karena yang sebenarnya kamu lakukan adalah 
mencoba mengelola ketidakpastian dengan membayangkan semua 
versi buruknya. Dan itu tidak pernah benar-benar berhasil. Hal 
buruk, ketika datang, hampir tidak pernah persis seperti yang 
kamu bayangkan. Dan hal-hal yang kamu habiskan begitu banyak 
waktu untuk takutkan sering kali tidak pernah terjadi sama 
sekali.

Jadi ini yang ingin aku coba untukmu: letakkan dulu. Hanya 
beberapa menit. Pikiran-pikiran itu akan tetap ada kalau nanti 
kamu membutuhkannya. Tapi sekarang kamu tidak membutuhkannya.

Sekarang kamu hanya perlu bernapas. Berada di sini. Ada di 
momen ini, yang sebenarnya baik-baik saja.`,

    `Otakmu bukan musuhmu. Tapi terkadang ia bertingkah 
    seperti itu.

Terlalu banyak berpikir bukan sesuatu yang jahat—ia sebenarnya 
sedang berusaha melindungimu. Sebagian dirimu memutuskan bahwa 
kalau kamu berpikir cukup keras tentang semua hal yang mungkin 
salah, kamu akan aman. Ini seperti bentuk sihir paling lama: 
kalau aku bersiap menghadapi bencana, mungkin aku bisa 
mencegahnya.

Tapi bukan begitu cara kerjanya. Persiapan itu berguna. 
Memikirkan hal yang sama berulang-ulang tidak. Pada titik 
tertentu, berpikir berhenti menjadi pemecahan masalah dan 
mulai menjadi sesuatu yang hanya menguras dirimu.

Aku ingin memutus lingkaran itu dengan lembut.

Kamu sudah melewati setiap hal menakutkan yang pernah 
dibayangkan otakmu sebagai sesuatu yang paling buruk. Bukti 
dari hidupmu menunjukkan bahwa kamu tangguh, mampu 
beradaptasi, dan jauh lebih mampu daripada yang diberikan 
kredit oleh pikiran cemasmu.

Kamu tidak harus menyelesaikan semuanya malam ini. Beberapa 
hal akan terselesaikan dengan sendirinya. Beberapa hal akan 
lebih mudah ditangani ketika kamu benar-benar menghadapinya. 
Dan sebagian hal yang sedang kamu khawatirkan mungkin tidak 
akan pernah terjadi.

Bernapas. Cukup bernapas. Satu hal dalam satu waktu.`,

    `Ketika pikiranmu tidak mau berhenti, rasanya bisa seperti 
    terjebak di ruangan dengan semua lampu menyala dan musik 
    terlalu keras, sementara kamu tidak bisa membuat semuanya 
    berhenti.

Itu melelahkan dengan cara yang sangat khas—karena tidak ada 
kelegaan fisik darinya. Kamu tidak bisa menjauh dari kepalamu 
sendiri.

Jadi mari coba sesuatu yang kecil: daripada mencoba berpikir 
untuk keluar dari lingkaran itu, sadari saja bahwa kamu sedang 
berada di dalamnya. Beri nama, pelan-pelan, kepada dirimu 
sendiri. "Aku sedang terlalu banyak berpikir sekarang." Itu 
saja. Kamu tidak harus menghentikannya. Cukup sadari.

Terkadang memberi nama saja sudah cukup untuk menciptakan 
sedikit jarak. Sedikit ruang. Cukup untuk bernapas 
melewatinya.

Kamu bukan pikiranmu. Kamu adalah orang yang mengamati 
pikiran-pikiran itu. Dan dari posisi itu, kamu punya sedikit 
lebih banyak pilihan tentang apa yang ingin kamu lakukan 
terhadapnya.

Kamu akan baik-baik saja. Pikiran-pikiran itu hanyalah 
kebisingan. Pada akhirnya mereka akan tenang.`,

    `Ini hal tentang skenario terburuk yang terus kembali ke 
    pikiranmu: kamu sebenarnya sudah melewatinya seratus kali 
    di dalam kepala.

Kamu sudah berjalan melewati bencana, percakapan, dan hasil 
akhirnya—berulang kali. Dan kamu masih di sini. Artinya, 
bahkan versi dirimu yang membayangkan hal terburuk pun cukup 
kuat untuk sampai ke sisi lainnya.

Versi yang nyata—versi yang benar-benar akan menghadapi apa 
pun yang datang—bahkan lebih kuat dari itu.

Aku tahu ini mungkin bukan hal yang paling menenangkan ketika 
kamu sedang berada di tengahnya. Ketika pikiranmu ingin terus 
berputar, logika tidak selalu menjadi penawarnya. Jadi aku 
tidak akan memberimu daftar alasan rasional mengapa semuanya 
baik-baik saja.

Aku hanya akan mengatakan bahwa aku percaya padamu. Secara 
nyata, konkret, dengan pengetahuan penuh tentang siapa 
dirimu—aku percaya kamu bisa menghadapi apa pun yang datang. 
Dan aku percaya sebagian besar hal yang sedang kamu 
khawatirkan bahkan tidak akan datang.

Kembalilah ke saat ini. Di sini lebih tenang.`,

    `Terlalu banyak berpikir hanyalah cinta yang berbalik ke 
    dalam lalu menguras dirinya sendiri.

Kamu sangat peduli—tentang melakukan sesuatu dengan benar, 
tentang tidak menyakiti siapa pun, tentang tidak disakiti. 
Kepedulian itu nyata dan baik. Tapi ketika tidak punya tempat 
untuk dituju, ia mulai berputar. Lalu mulai semakin cepat. 
Lalu tiba-tiba sudah pukul 2 pagi dan kamu sedang 
mengulang-ulang percakapan di kepala yang mungkin bahkan tidak 
akan pernah terjadi.

Yang ingin aku kamu tahu: rasa peduli itu baik. Rasa peduli 
adalah salah satu hal favoritku darimu. Tapi ia tidak harus 
selalu muncul dengan cara seperti ini. Ia boleh beristirahat. 
Rasa peduli itu akan tetap ada besok.

Kamu tidak sedang menjadi ceroboh hanya karena membiarkan 
pikiranmu tenang. Kamu sedang bersikap baik kepada dirimu 
sendiri.

Dan kamu pantas mendapatkan kebaikan, terutama dari dirimu 
sendiri.`,

    `Aku tahu ketika kamu sedang terjebak dalam putaran 
    pikiran, hal terakhir yang ingin kamu dengar adalah 
    seseorang berkata, "sudah, jangan dipikirkan." Jadi aku 
    tidak akan mengatakan itu.

Sebaliknya aku akan mengatakan: kamu sudah cukup 
memikirkannya. Apa pun masalahnya—kamu sudah 
mempertimbangkannya dari segala sisi. Kamu sudah mengujinya 
berkali-kali. Kamu sudah menjalankan semua kemungkinan di 
kepala. Kamu sudah melakukan bagian berpikirmu. Sudah selesai.

Yang kamu lakukan sekarang bukanlah pemikiran baru. Itu 
pemikiran yang sama, berputar dalam lingkaran, setiap kali 
memakai bentuk yang berbeda. Dan itu mengambil energi yang 
kamu perlukan untuk hal-hal lain.

Beri dirimu izin untuk berhenti. Bukan karena masalahnya tidak 
penting—tetapi karena kamu sudah memberikan perhatian penuh 
padanya. Kamu sudah melakukan bagian yang seharusnya. Sekarang 
kamu boleh beristirahat darinya.

Jawabannya, kalau memang akan datang, akan lebih mudah 
ditemukan setelah kamu beristirahat. Selalu begitu. Otakmu 
bekerja paling baik ketika kamu tidak memaksanya.

Biarkan ia beristirahat. Biarkan dirimu beristirahat. Aku di 
sini.`,

    `Ada versi dari pikiran ini, dan versi lain dari pikiran 
    ini, dan versi lainnya lagi—dan malam ini kamu sudah 
    mengunjungi semuanya.

Dan aku hanya ingin menawarkan jalan keluar dari gedung itu.

Jalan keluarnya tidak membutuhkan penyelesaian apa pun. Tidak 
membutuhkan kepastian. Hanya membutuhkan pilihan, untuk 
sekarang, untuk berada di tempat lain selain di dalam 
lingkaran pikiran itu.

Mari ke sini sebagai gantinya. Ke kalimat ini. Ke momen ini. 
Tarik napas cukup pelan sampai kamu bisa menghitungnya. 
Rasakan kakimu di mana pun kamu berada. Perhatikan sesuatu di 
ruangan bersamamu—apa pun yang kecil, tidak masalah apa.

Kamu tidak harus menemukan semua jawabannya malam ini. Malam 
ini sudah berlalu sedikit demi sedikit. Besok kamu akan 
melihat semuanya dari sudut pandang yang berbeda. Hal-hal yang 
terlihat sangat besar tengah malam sering kali hanya terlihat 
biasa di pagi hari.

Aku tidak akan pergi ke mana-mana. Kamu baik-baik saja. 
Sungguh, kamu baik-baik saja.`,

    `Lingkaran pikiran ini sudah berlangsung cukup lama. Aku 
    tahu kamu juga menyadarinya.

Menurutku, di balik semua pemikiran itu, sebenarnya yang 
sedang kamu cari adalah: kepastian. Rasa aman. Perasaan bahwa 
semuanya akan baik-baik saja, bahwa kamu tidak akan melakukan 
semuanya dengan salah, bahwa orang-orang yang kamu pedulikan 
tidak akan pergi ke mana-mana.

Jadi biarkan aku memberikannya secara langsung daripada 
membuatmu mencarinya di ujung sebuah putaran pikiran:

Kamu akan baik-baik saja. Kamu tidak menghancurkan apa pun. 
Kamu tidak terlalu berlebihan. Kamu tidak membuat kesalahan 
yang tidak bisa diperbaiki. Orang-orang yang 
menyayangimu—termasuk aku—tidak sedang berada di ambang 
meninggalkanmu. Kamu baik-baik saja. Bahkan lebih dari baik.

Bawa kalimat itu bersamamu. Biarkan ia menggantikan lingkaran 
pikiran itu, setidaknya untuk malam ini.

Aku menyayangimu. Kembalilah ke saat ini.`, ],

  courage: [ `Aku tahu ada sesuatu yang sedang meminta 
    keberanianmu sekarang. Dan aku tahu keberanian tidak 
    terasa seperti yang sering ditampilkan film—keberanian 
    tidak selalu terasa seperti kekuatan. Terkadang ia terasa 
    seperti rasa takut, tetapi kamu tetap melakukannya.

Artinya, kalau kamu merasa takut, kamu sebenarnya sudah berada 
di ambangnya. Kamu sudah hampir sampai.

Apa pun yang sedang kamu hadapi—percakapan, keputusan, 
perubahan—aku ingin kamu tahu bahwa kamu tidak menghadapinya 
tanpa bekal. Kamu punya sejarah berhasil melewati hal-hal 
sulit. Kamu memiliki kemampuan yang lebih besar daripada yang 
selama ini kamu gunakan. Dan kamu punya orang-orang yang 
percaya padamu, bahkan ketika kamu sendiri tidak percaya pada 
dirimu.

Aku salah satu dari orang-orang itu. Aku percaya padamu dengan 
keyakinan yang nyata dan konkret, yang datang dari benar-benar 
mengenalmu. Dan yang aku tahu adalah kamu mampu melakukan 
lebih dari yang kamu kira.

Ambil langkah itu. Kamu tidak harus bebas dari rasa takut. 
Kamu hanya perlu melangkah.`,

    `Menurutku kamu lebih berani daripada yang kamu sadari. 
    Kamu sudah begitu sering berani sampai keberanian itu 
    terasa biasa, dan kamu berhenti menganggapnya sebagai 
    keberanian.

Tapi aku memperhatikannya. Aku memperhatikan berapa kali kamu 
memilih jalan yang lebih sulit dan lebih jujur ketika jalan 
yang lebih mudah sebenarnya tersedia. Aku memperhatikan berapa 
kali kamu tetap hadir untuk sesuatu meskipun itu membuatmu 
takut.

Kamu sudah membangun keberanian yang tenang ini selama waktu 
yang lama. Dan sekarang kamu membutuhkannya. Dan keberanian 
itu ada—selalu ada di sana, di balik keraguan.

Jadi apa pun yang ada di depanmu: kamu bisa melakukannya. 
Tidak harus sempurna. Tidak harus tanpa rasa takut. Tapi kamu 
bisa. Dan versi dirimu di sisi lainnya—versi yang melakukan 
hal berani itu—sedang menunggumu.

Pergilah menjadi dirinya. Dia sepadan dengan rasa tidak nyaman 
yang harus kamu lewati.`,

    `Keberanian jarang bersuara keras. Sebagian besar 
    keberanian itu tenang, sederhana, dan pribadi—mengatakan 
    hal yang kamu takut katakan, pergi ke tempat yang kamu 
    takut datangi, atau sekadar bangun dari tempat tidur di 
    hari ketika kamu sebenarnya tidak ingin.

Kamu sudah menjalani hidup dengan keberanian yang tenang. Aku 
tahu itu, bahkan jika kamu sendiri belum menyadarinya.

Dan apa pun yang sedang diminta oleh momen ini 
darimu—menurutku kamu memiliki cukup kekuatan untuk 
menghadapinya. Bukan berlebihan. Bukan sampai melimpah. Tapi 
cukup. Dan cukup adalah semua yang dibutuhkan.

Ketika kamu sudah berada di sisi lainnya, kamu akan melihat 
kembali rasa takut itu dan menyadarinya seperti apa adanya: 
sebuah gerbang, bukan tembok. Sesuatu yang kamu lewati untuk 
sampai ke tempat yang layak dituju.

Aku akan ada ketika kamu sampai.`,

    `Tidak apa-apa untuk merasa takut. Takut dan berani 
    bukanlah dua hal yang berlawanan. Sering kali keduanya 
    justru merupakan hal yang sama.

Momen paling berani dalam hidupmu mungkin tidak terasa berani 
dari dalam. Mungkin terasa menakutkan. Tapi kamu tetap 
melakukannya. Dan itulah intinya.

Aku tidak akan mengatakan bahwa semuanya akan mudah. Mungkin 
memang tidak. Tapi aku akan mengatakan bahwa kamu memiliki 
kemampuan untuk melakukan hal-hal sulit. Kamu sudah 
membuktikannya sebelumnya. Kamu akan membuktikannya lagi.

Dan jika semuanya berjalan tidak sempurna—yang mungkin saja 
terjadi—kamu akan pulih dan melanjutkan. Kamu selalu berhasil 
melakukannya. Itu bagian dari kekuatanmu: bukan bahwa semuanya 
tidak pernah salah, tetapi kamu terus berjalan ketika 
kesalahan terjadi.

Tarik napas. Lalu ambil langkah itu. Aku bersamamu dalam 
semangat untuk setiap langkahnya.`,

    `Apa pun yang membuatmu gugup sekarang—hal yang membuat 
    dadamu terasa sesak dan pikiranmu berlari—aku ingin kamu 
    tahu sesuatu:

Rasa takut yang muncul sebelum melakukan sesuatu yang penting 
adalah tubuhmu yang menganggapnya serius. Itu bukan tanda 
bahwa kamu tidak seharusnya melakukannya. Itu tanda bahwa hal 
tersebut berarti. Dan hal-hal yang berarti layak dilakukan 
meskipun ada sedikit rasa takut di dalam dada.

Kamu tidak harus siap. Kamu hanya perlu memulai. Kesiapan 
sering kali hanyalah cerita yang kita katakan kepada diri 
sendiri untuk menunda—dan apa yang kamu sebut "belum siap" 
sering kali justru merupakan saat yang tepat untuk melangkah.

Mulailah. Kamu akan menemukan sisanya sambil berjalan. Kamu 
selalu begitu. Kamu sangat pandai beradaptasi, menemukan jalan 
secara langsung, dan ternyata mampu melakukan lebih dari yang 
kamu perkirakan.

Percayalah pada itu. Percayalah pada dirimu. Aku sudah 
sepenuhnya percaya padamu.`,

    `Aku ingin memberitahumu sesuatu tentang versi dirimu yang 
    ada di sisi lain dari hal yang sedang kamu takuti.

Dia lebih ringan. Dia lega. Dia bangga—bukan dengan cara yang 
mencolok, tetapi dengan cara yang tenang dan pribadi, karena 
berhasil melakukan sesuatu yang membuatnya takut. Dan dia 
senang sudah melangkah, meskipun hasilnya tidak sempurna, 
meskipun prosesnya berantakan.

Versi itu tersedia untukmu. Dia ada di sana, tepat di sisi 
lain dari keputusan, percakapan, atau langkah itu.

Satu-satunya cara untuk mencapainya adalah melangkah.

Kamu pernah berani. Kamu berani sekarang. Kamu akan berani 
lagi. Aku sudah melihatnya sendiri.

Apa pun ini—melangkahlah. Aku akan ada di sini ketika kamu 
kembali.`,

    `Ada momen-momen yang meminta lebih banyak dari kita 
    daripada yang terasa adil. Momen itu datang ketika kita 
    sudah terbebani, sudah lelah, sudah melakukan semua yang 
    kita bisa.

Lalu momen itu meminta lebih.

Di hari-hari seperti itu, aku ingin kamu ingat bahwa diminta 
memberi lebih bukan berarti kamu harus mengeluarkannya dari 
ketiadaan. Terkadang lebih datang dari istirahat. Terkadang 
dari membiarkan seseorang membantu. Terkadang dari melakukan 
lebih sedikit daripada yang menurutmu harus dilakukan, lalu 
percaya bahwa itu sudah cukup.

Keberanian tidak harus dramatis. Terkadang keberanian adalah 
tindakan kecil untuk bergerak maju. Satu langkah. Satu kata. 
Satu pilihan.

Dan terkadang hanya itu yang dibutuhkan untuk mengubah arah 
semuanya.

Langkah itu ada dalam dirimu. Aku tahu. Ambillah ketika kamu 
siap.`,

    `Kamu lebih mampu daripada yang membuatmu merasa takut.

Aku tahu itu adalah kalimat yang sering dikatakan orang, dan 
aku tahu itu bisa terasa kosong. Jadi aku akan membuatnya 
spesifik: aku sudah melihatmu menghadapi hal-hal yang mungkin 
akan membuat orang lain menyerah. Aku sudah melihatmu takut 
lalu tetap melakukannya. Aku sudah melihatmu tidak yakin lalu 
menemukan pijakanmu. Aku sudah melihatmu jatuh lalu bangkit 
dengan cara yang membuatku ingin menjadi lebih baik juga.

Itu bukan hal kecil. Itu adalah segalanya.

Apa pun yang sedang kamu hadapi sekarang itu nyata, dan memang 
sulit, dan kamu berhak mengakui hal tersebut. Tapi itu juga 
masih berada dalam batas hal-hal yang mampu kamu hadapi. Aku 
percaya itu sepenuh hati.

Kamu bisa. Sungguh. Dan aku akan ada di sini ikut bahagia 
  ketika kamu berhasil melewatinya.`, ],

  missing: [ `Aku juga merindukanmu. Bahkan ketika akulah yang 
    meninggalkan ruangan. Bahkan ketika aku akan bertemu 
    denganmu nanti. Sebagian dari diriku selalu sedikit 
    merindukanmu, terlepas dari jarak dan keadaan.

Dan aku tahu itu mungkin terdengar aneh, atau seperti semacam 
kesedihan—tapi aku tidak mengalaminya seperti itu. Aku 
mengalaminya sebagai perasaan ketika begitu peduli pada 
seseorang sampai jarak yang biasa pun terasa berarti.

Kalau kamu merindukanku: aku di sini. Dan aku akan kembali. 
Dan jarak antara sekarang dan pertemuan berikutnya—apa pun 
bentuknya—hanyalah sementara. Itu hanya jeda, bukan akhir.

Aku memikirkanmu lebih sering daripada yang kukatakan. Aku 
memikirkan caramu bergerak melewati ruangan, suaramu dari 
ruang lain, dan hangatnya berada di dekatmu. Semuanya.

Bertahanlah. Kita akan sampai ke sana.`,

    `Merindukan seseorang adalah salah satu bentuk cinta yang 
    paling aneh. Cinta yang tidak tahu harus diletakkan di 
    mana—cinta yang muncul, tetapi orang yang dituju tidak 
    sedang ada di sana untuk menerimanya.

Kalau kamu merasakan itu hari ini: itu hanya cintamu yang 
sedang mencariku. Dan cinta itu akan menemukanku. Selalu 
begitu.

Aku ingin kamu tahu bahwa aku tidak pernah menganggap 
kehadiranmu sebagai sesuatu yang biasa. Tidak pernah. 
Kekosongan berbentuk dirimu yang kurasakan ketika kita tidak 
bersama—selalu ada. Ia tidak benar-benar hilang. Itu hanya 
berarti kamu begitu berarti sampai meninggalkan jejak.

Dan ketika kita bersama lagi—dan kita akan bersama lagi—aku 
akan berusaha lebih hadir untuk benar-benar menghayatinya. 
Lebih berada di sana. Karena berada di dekatmu adalah sesuatu 
yang ingin benar-benar kurasakan, bukan sesuatu yang ingin 
kuanggap biasa.

Aku akan kembali. Aku selalu kembali.`,

    `Di hari-hari ketika rasa rindu terasa terlalu 
    besar—ketika ruang tempat seharusnya kamu berada terasa 
    begitu luas dan kosong—aku ingin kamu melakukan sesuatu 
    untukku.

Temukan satu hal kecil yang mengingatkanmu pada kita. Bukan 
dengan cara yang menyedihkan. Dengan cara yang mengingatkanmu 
bahwa kita nyata. Bahwa kita ada. Bahwa apa yang kita miliki 
kuat dan benar, dan tidak hilang hanya karena jarak atau 
waktu.

Kita sudah membangun sesuatu. Ia hidup di antara kita, bukan 
hanya dalam momen ketika kita bersama. Ia bisa dibawa ke mana 
pun, tetap ada, dan selalu hadir meski kita tidak bisa saling 
menjangkau secara langsung.

Kamu membawa sebagian dariku bersamamu. Aku membawa sebagian 
darimu bersamaku. Itu tidak hilang.

Rindukan aku sesukamu. Aku juga merindukanmu. Lalu ingat bahwa 
rasa rindu itu membuktikan bahwa kita nyata.`,

    `Jarak itu aneh. Jarak tidak mengurangi cinta—entah 
    bagaimana justru membuatmu semakin sadar akan 
    keberadaannya.

Aku merasakan kehadiranmu ketika kamu tidak ada. Hanya itu 
cara yang bisa kujelaskan. Ada frekuensi tertentu dalam dirimu 
yang selalu bisa kutangkap, entah kamu sedang berada di 
ruangan yang sama atau tidak.

Jadi ketika kamu merindukanku: aku tidak sejauh yang terasa. 
Aku ada di sini, juga memikirkanmu, membawamu bersamaku 
seperti yang selalu kulakukan.

Dan ketika kita bersama lagi—apa pun bentuknya, kapan pun itu 
terjadi—aku akan memastikan kamu merasakannya. Memastikan kamu 
tahu bahwa rasa rindunya sama-sama ada, cintanya tetap, dan 
kerinduannya nyata di kedua sisi.

Kamu tidak sendirian dalam rasa rindu itu. Tidak pernah.`,

    `Aku sudah memikirkan apa yang ingin kukatakan kepadamu 
    ketika kamu merindukanku, dan aku selalu sampai pada 
    tempat yang sama:

Aku ingin kamu tahu bahwa kamu berarti. Bukan dengan cara umum 
seperti ucapan di kartu. Dengan cara yang spesifik, pribadi, 
dan hanya berlaku untukmu.

Cara aku memikirkanmu. Cara keberadaanmu membentuk hidupku. 
Cara aku menata hidupku dengan keinginan untuk menjadi 
seseorang yang membuatmu senang mengenalku.

Semuanya nyata. Semuanya tetap nyata bahkan ketika terpisah 
jarak. Bahkan saat harus menunggu.

Dirimu yang kurindukan adalah dirimu yang utuh—bukan hanya 
saat-saat menyenangkan atau mudah, tetapi semuanya. Suasana 
hatimu, diamnya kamu, dan cara kamu melihat berbagai hal. 
Semuanya.

Rindukan aku juga. Lalu bertahanlah. Aku di sini.`,

    `Ketika aku tidak ada di sana dan kamu berharap aku ada, 
    aku ingin kamu melakukan sesuatu yang kecil untukku.

Lihat sekeliling tempatmu berada. Perhatikan apa yang indah 
dari momen itu, bahkan jika momennya terasa sulit. Selalu ada 
sesuatu—kualitas cahaya, sebuah suara, suhu udara.

Hal itu nyata. Momen ini—bahkan dengan rasa rindunya—nyata. 
Dan ini adalah salah satu momen yang akan berlalu dan menjadi 
kenangan, dan dalam kenangan mungkin terasa lebih manis 
daripada sekarang.

Kita mengumpulkan momen-momen ini, kamu dan aku. Bahkan yang 
sedikit menyakitkan. Semuanya menjadi bagian dari kisah kita.

Aku menyayangimu melewati segala jarak. Kita akan bersama lagi 
segera.`,

    `Rasa rindu yang kamu rasakan hanyalah cinta yang sedang 
    mencari tempat untuk berlabuh.

Dan ia akan menemukan tempatnya. Selalu. Dalam sebuah 
panggilan, sebuah pesan, atau saat kita kembali berada di 
ruangan yang sama dan kamu bahkan tidak akan mengingat 
seberapa sakit jaraknya karena kedekatan akan mengisinya 
kembali.

Itulah yang kusukai dari kita: kita tahu bagaimana untuk 
kembali. Kita tahu bagaimana menutup jarak, tidak peduli 
bagaimana jarak itu terbuka. Kita terus menemukan satu sama 
lain, dalam setiap arti dari kalimat itu.

Jadi rindukan aku hari ini. Rasakan sepenuhnya. Lalu 
ketahuilah bahwa perasaan itu sedang mengarah ke sesuatu yang 
baik.

Aku sedang dalam perjalanan kembali kepadamu. Selalu.`,

    `Ada hari-hari ketika ketidakhadiran terasa lebih keras 
    daripada kehadiran yang pernah ada. Itulah salah satu hal 
    yang tidak diberitahukan orang tentang merindukan 
    seseorang—rasa rindu itu tidak sunyi. Ia keras.

Aku tahu itu. Dan aku minta maaf karena tidak berada di sana 
untuk mengisi ruang kosong itu.

Tapi aku ingin kamu tahu bahwa hal-hal di antara kita—hal-hal 
yang nyata, yang dalam—tidak bergantung pada kedekatan. Mereka 
hidup di tempat yang lebih bertahan lama dari sekadar jarak. 
Mereka sudah melewati semua jarak sebelumnya. Mereka akan 
melewati yang satu ini juga.

Kita akan baik-baik saja. Kita memang baik-baik saja. Dan 
ketika ketidakhadiran ini berakhir dan kita bersama lagi, aku 
akan menceritakan semua hal yang kupikirkan selama aku pergi.

Daftarnya cukup panjang.`, ],

  general: [ `Aku hanya ingin mengatakan sesuatu yang 
    sederhana, dan benar-benar bersungguh-sungguh:

Kamu adalah salah satu orang paling nyata yang pernah kukenal. 
Tidak sempurna—tidak ada yang sempurna. Tidak selalu 
mudah—tidak ada yang selalu mudah. Tapi nyata dalam hal yang 
penting: hadir, tulus, dan terus berusaha.

Kenyataan dalam dirimu itu langka. Dan itu adalah salah satu 
hal tentangmu yang paling sering kupikirkan, di hari-hari 
biasa ketika sebenarnya tidak ada hal khusus untuk dipikirkan. 
Hanya: dia nyata. Dia hadir. Dia peduli pada hal-hal yang 
memang penting.

Kamu pantas mendapatkan kehidupan yang bisa menyambutmu di 
tingkat yang sama. Kehidupan yang sepadan dengan ketulusan 
yang kamu bawa ke dalamnya.

Aku akan terus berusaha menjadi seperti itu. Menjadi seseorang 
yang sepadan dengan ketulusanmu. Menjadi seseorang yang 
melihatmu dengan jelas dan tetap tinggal, bukan meskipun 
mengetahui seluruh dirimu, tetapi justru karena itu.

Terima kasih sudah mengizinkanku mengenalmu.`,

    `Tidak ada alasan khusus untuk pesan ini. Tidak ada 
    keadaan darurat dan tidak ada perayaan tertentu. Aku hanya 
    ingin menjangkau melewati jarak apa pun yang ada sekarang 
    dan mengingatkanmu:

Kamu disayangi. Secara khusus. Dengan namamu. Oleh seseorang 
yang memilih ini, yang terus memilihnya, dan akan memilihnya 
lagi.

Bukan karena kamu sempurna atau karena kamu selalu melakukan 
semuanya dengan benar, tetapi karena kamu—dirimu yang 
sebenarnya, manusia utuh yang penuh cerita dan kerumitan—layak 
untuk dipilih.

Itu saja. Itulah seluruh pesannya.

Kamu layak dipilih. Dan kamu dipilih.`,

    `Aku sedang memikirkan semua cara kecil yang membuat 
    hidupku menjadi lebih baik karena dirimu.

Bukan yang besar dan dramatis—meskipun ada juga. Yang kecil. 
Yang spesifik. Cara kamu melakukan sesuatu. Cara kamu 
memperhatikan hal yang mungkin tidak diperhatikan orang lain. 
Cara kamu membuat hal biasa terasa seperti memiliki arti.

Hal-hal itu tidak kecil bagiku. Mereka adalah tekstur dari 
hidupku. Mereka adalah hal-hal yang kupikirkan ketika aku 
berada di sebuah ruangan dan kamu tidak ada di sana.

Aku tidak selalu mengatakannya. Seharusnya mungkin lebih 
sering.

Jadi ini untukmu: kamu telah membuat hidupku lebih baik dalam 
ratusan cara kecil, dan aku menyadarinya, dan aku bersyukur 
untuk setiap satunya.`,

    `Aku berharap hari ini memberimu sesuatu yang indah. 
    Sesuatu yang kecil dan tidak terduga—jenis kebaikan yang 
    datang tanpa pengumuman dan membuat semuanya terasa 
    sedikit lebih ringan untuk sesaat.

Kamu pantas mendapatkan momen-momen seperti itu. Kamu pantas 
menerima, bukan hanya memberi. Kamu pantas dikejutkan oleh 
sesuatu yang baik.

Dan di hari-hari ketika tidak ada hal baik yang datang dengan 
sendirinya: ketahuilah bahwa aku sedang memikirkanmu. Di suatu 
tempat, ada seseorang yang menyimpan namamu dalam pikirannya 
dan kehangatan di dadanya, dan benar-benar senang bahwa kamu 
ada.

Itu selalu benar. Bahkan di hari-hari ketika rasanya tidak 
benar.

Kamu disayangi. Di hari-hari biasa, dalam momen-momen sunyi, 
ketika tidak ada apa-apa yang sedang terjadi.`,

    `Aku ingin mengatakan sesuatu yang rasanya jarang 
    kusampaikan dengan kata-kata yang tepat:

Berada bersamamu—benar-benar bersamamu, dalam keseharian, 
dalam momen-momen biasa—adalah salah satu hal yang paling 
kusyukuri dalam hidupku.

Bukan gagasan tentang dirimu. Dirimu yang sebenarnya. Dirimu 
yang spesifik. Dirimu yang ada dalam momen-momen tanpa 
dibuat-buat, saat mengantuk, saat kesal, dan saat kamu hanya 
sedang mencoba memutuskan mau makan apa tetapi tidak kunjung 
memilih.

Semuanya. Aku menyukai semuanya. Aku menyukai kehidupan yang 
sedang kita bangun bersama bahkan dalam bentuknya yang paling 
sederhana dan tidak glamor.

Aku senang kita menemukan satu sama lain. Aku akan menemukanmu 
lagi, dalam versi apa pun dari kehidupan ini.`,

    `Di hari-hari ketika dunia terasa sangat besar, 
    melelahkan, dan terlalu banyak untuk dihadapi—

Aku ingin kamu ingat bahwa kamu tidak harus menghadapi 
semuanya sekaligus. Kamu hanya perlu melakukan hal kecil 
berikutnya. Itu saja. Hal kecil berikutnya. Lalu satu lagi 
setelahnya.

Kamu sudah melewati setiap hari rumit dalam hidupmu dengan 
cara seperti ini: mengambil satu langkah, lalu langkah 
berikutnya. Tidak sempurna. Tidak tanpa tersandung. Tapi terus 
maju.

Itu cukup. Bahkan lebih dari cukup. Itu segalanya.

Dan aku akan tetap berada di sini di sisimu untuk setiap 
langkah yang kamu izinkan untuk kusaksikan.`,

    `Ada sesuatu yang ingin aku bawa bersamamu hari ini, 
    seperti benda kecil yang kamu masukkan ke saku:

Ada seseorang yang melihatmu. Bukan versi yang kamu tunjukkan, 
bukan versi yang sudah diedit, bukan versi yang menurutmu bisa 
diterima. Seluruh dirimu. Versi di balik layar. Versi yang 
terkadang takut, terkadang tidak yakin, dan tidak selalu tahu 
apa yang harus dilakukan.

Versi itulah yang membuatku jatuh hati. Versi itulah yang 
kupikirkan.

Kamu tidak harus tampil sempurna untukku. Kamu tidak pernah 
harus begitu. Kamu bisa menjadi dirimu sendiri, persis seperti 
adanya, dan itu sudah lebih dari cukup.

Aku menyayangimu, secara khusus dan sepenuhnya, hari ini.`,

    `Aku tidak punya kebijaksanaan besar untukmu hari ini. Aku 
    hanya punya ini:

Kamu sudah cukup. Bukan hampir cukup. Bukan cukup dengan 
syarat tertentu. Hanya cukup.

Dirimu yang sekarang, di momen ini—sudah memadai. Kamu tidak 
harus sudah melangkah lebih jauh. Kamu tidak harus sudah 
memahami lebih banyak hal. Kamu tidak harus memiliki lebih 
banyak sesuatu untuk ditunjukkan.

Kamu ada. Kamu mencintai. Kamu berusaha. Itulah semuanya.

Aku bangga padamu untuk semua cara tenang dan tidak terlihat 
  yang kamu lakukan untuk terus berjalan. Teruslah berjalan.`, 
  ],
};

/* ───────────────────────────────────────────────────── STATE
───────────────────────────────────────────────────────*/ 
const state = {
  currentMood: null, lastMessageIndex: -1, audioReady: false, 
  audioEnabled: localStorage.getItem('cinemaAudio') !== 
  'false', currentLightboxIndex: 0, filmstripItems: [], 
  typoActive: false, finalSequenceStarted: false, 
  sceneObserver: null,
};

/* ───────────────────────────────────────────────────── DOM 
   REFS
───────────────────────────────────────────────────────*/ 
const $ = id => document.getElementById(id);

const els = { opening: $('opening'), enterBtn: 
  $('enterCinemaBtn'), openingCredits: $('openingCredits'), 
  creditDirector: $('creditDirector'), creditStar: 
  $('creditStar'), mainFilm: $('mainFilm'), sceneIndicator: 
  $('sceneIndicator'), sceneCurrentLbl: 
  $('sceneCurrentLabel'), audioControl: $('audioControl'), 
  bgMusic: $('bgMusic'), lightbox: $('lightbox'), 
  lightboxClose: $('lightboxClose'), lightboxImg: 
  $('lightboxImg'), lightboxMissing: $('lightboxMissing'), 
  lightboxLabel: $('lightboxFrameLabel'), lightboxCaption: 
  $('lightboxCaption'), lightboxPrev: $('lightboxPrev'), 
  lightboxNext: $('lightboxNext'), moodSelector: 
  $('moodSelector'), messageDisplay: $('messageDisplay'), 
  messageBody: $('messageBody'), messageNextBtn: 
  $('messageNextBtn'), typoSequence: $('typoSequence'), 
  scene05Letter: $('scene05Letter'), finalSequence: 
  $('finalSequence'), creditsWrap: $('creditsWrap'), 
  creditsScroll: $('creditsScroll'), finalActions: 
  $('finalActions'), replayBtn: $('replayBtn'), 
  creditsDirFinal: $('creditsDirectorFinal'), 
  creditsStarFinal:$('creditsStarFinal'), birthdayLabel: 
  $('birthdayLabel'), birthdayName: $('birthdayName'), 
  birthdayFrom: $('birthdayFromName'),
};

/* ───────────────────────────────────────────────────── INIT
───────────────────────────────────────────────────────*/ 
function init() {
  applyConfig(); setupOpening(); setupAudio(); 
  setupFilmstrip(); setupLightbox(); setupMoodSelector(); 
  setupScrollReveal(); setupTypoSequence(); setupFinalScene(); 
  setupReplay();
}

/* ───────────────────────────────────────────────────── 
   CONFIG APPLICATION
───────────────────────────────────────────────────────*/ 
function applyConfig() {
  if (els.creditDirector) els.creditDirector.textContent = 
  CONFIG.yourName; if (els.creditStar) 
  els.creditStar.textContent = CONFIG.herName; if 
  (els.birthdayName) els.birthdayName.textContent = 
  CONFIG.herName; if (els.birthdayFrom) 
  els.birthdayFrom.textContent = CONFIG.yourName; if 
  (els.birthdayLabel) els.birthdayLabel.textContent = 
  CONFIG.birthday; if (els.creditsDirFinal) 
  els.creditsDirFinal.textContent = CONFIG.yourName; if 
  (els.creditsStarFinal)els.creditsStarFinal.textContent= 
  CONFIG.herName;
}

/* ───────────────────────────────────────────────────── 
   OPENING SEQUENCE
───────────────────────────────────────────────────────*/ 
function setupOpening() {
  if (!els.enterBtn) return;

  // Credits appear after CSS animation on the title
  setTimeout(() => { if (els.openingCredits) {
      els.openingCredits.removeAttribute('aria-hidden');
    }
  }, 2000);

  els.enterBtn.addEventListener('click', enterCinema); 
  els.enterBtn.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { 
    e.preventDefault(); enterCinema(); }
  });
}

function enterCinema() {
  // Start audio on first interaction
  startAudio();

  // Letterbox bars
  document.body.classList.add('letterbox-active');

  // Fade out opening
  els.opening.classList.add('fade-out'); 
  els.opening.setAttribute('aria-hidden', 'true');

  // Show main film
  els.mainFilm.style.display = 'block';

  setTimeout(() => { els.mainFilm.classList.add('visible'); 
    setTimeout(() => {
      els.mainFilm.classList.add('revealed');
    }, 50);
  }, 200);

  // Remove opening entirely
  setTimeout(() => { els.opening.classList.add('gone'); 
    document.body.classList.remove('letterbox-active');
    // Show UI chrome
    els.audioControl.classList.add('visible'); 
    els.sceneIndicator.classList.add('visible');
  }, 1400);
}

/* ───────────────────────────────────────────────────── AUDIO
───────────────────────────────────────────────────────*/ 
function setupAudio() {
  if (!els.bgMusic) return;

  // Gracefully handle missing audio
  els.bgMusic.addEventListener('error', () => { 
    state.audioReady = false;
  });

  els.bgMusic.addEventListener('canplaythrough', () => { 
    state.audioReady = true;
  });

  els.audioControl.addEventListener('click', toggleAudio);

  // Restore preference
  if (!state.audioEnabled) { 
    els.audioControl.querySelector('.audio-label').textContent 
    = 'SOUNDTRACK';
  }
}

function startAudio() { if (!els.bgMusic || 
  !state.audioEnabled) return; els.bgMusic.volume = 0; const 
  play = els.bgMusic.play(); if (play !== undefined) {
    play.then(() => {
      fadeAudioIn();
    }).catch(() => {
      // Autoplay blocked — user can enable manually
    });
  }
}

function fadeAudioIn(targetVol = 0.35, duration = 3000) { 
  const step = targetVol / (duration / 50); const interval = 
  setInterval(() => {
    if (els.bgMusic.volume + step < targetVol) { 
      els.bgMusic.volume += step;
    } else {
      els.bgMusic.volume = targetVol; clearInterval(interval);
    }
  }, 50);
}

function toggleAudio() { if (els.bgMusic.paused) {
    const play = els.bgMusic.play(); if (play !== undefined) {
      play.then(() => { fadeAudioIn(); 
        els.audioControl.classList.add('playing'); 
        state.audioEnabled = true; 
        localStorage.setItem('cinemaAudio', 'true');
      }).catch(() => {});
    }
  } else {
    els.bgMusic.pause(); 
    els.audioControl.classList.remove('playing'); 
    state.audioEnabled = false; 
    localStorage.setItem('cinemaAudio', 'false');
  }
}

/* ───────────────────────────────────────────────────── 
   FILMSTRIP / GALLERY
───────────────────────────────────────────────────────*/ 
function setupFilmstrip() {
  const items = document.querySelectorAll('.filmstrip-item'); 
  state.filmstripItems = Array.from(items);

  items.forEach((item, index) => { 
    item.setAttribute('tabindex', '0'); 
    item.setAttribute('role', 'button'); 
    item.setAttribute('aria-label', `Open frame 
    ${item.dataset.frame}`);

    item.addEventListener('click', () => openLightbox(index)); 
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { 
      e.preventDefault(); openLightbox(index); }
    });
  });
}

/* ───────────────────────────────────────────────────── 
   LIGHTBOX
───────────────────────────────────────────────────────*/ 
function setupLightbox() {
  els.lightboxClose.addEventListener('click', closeLightbox); 
  els.lightboxPrev.addEventListener('click', () => 
  navigateLightbox(-1)); 
  els.lightboxNext.addEventListener('click', () => 
  navigateLightbox(1));

  els.lightbox.addEventListener('click', e => { if (e.target 
    === els.lightbox) closeLightbox();
  });

  document.addEventListener('keydown', e => { if 
    (!els.lightbox.classList.contains('open')) return; if 
    (e.key === 'Escape') closeLightbox(); if (e.key === 
    'ArrowLeft') navigateLightbox(-1); if (e.key === 
    'ArrowRight') navigateLightbox(1);
  });
}

function openLightbox(index) { state.currentLightboxIndex = 
  index; renderLightboxFrame(index); 
  els.lightbox.classList.add('open'); 
  els.lightbox.removeAttribute('aria-hidden'); 
  els.lightboxClose.focus(); document.body.style.overflow = 
  'hidden';
}

function closeLightbox() { 
  els.lightbox.classList.remove('open'); 
  els.lightbox.setAttribute('aria-hidden', 'true'); 
  document.body.style.overflow = '';
}

function navigateLightbox(dir) { const total = 
  state.filmstripItems.length; state.currentLightboxIndex = 
  (state.currentLightboxIndex + dir + total) % total; 
  renderLightboxFrame(state.currentLightboxIndex);
}

function renderLightboxFrame(index) { const item = 
  state.filmstripItems[index]; if (!item) return;

  const img = item.querySelector('img'); const frame = 
  item.dataset.frame || String(index + 1).padStart(3, '0'); 
  const caption = item.dataset.caption || '';

  els.lightboxLabel.textContent = `FRAME ${frame}`; 
  els.lightboxCaption.textContent = caption;

  // Reset
  els.lightboxMissing.classList.remove('visible'); 
  els.lightboxImg.style.display = 'block';

  if (img && img.src && 
    !item.classList.contains('img-missing')) { 
    els.lightboxImg.src = img.src; els.lightboxImg.alt = 
    img.alt || `Frame ${frame}`; els.lightboxImg.onerror = () 
    => {
      els.lightboxImg.style.display = 'none'; 
      els.lightboxMissing.classList.add('visible');
    };
  } else {
    els.lightboxImg.style.display = 'none'; 
    els.lightboxMissing.classList.add('visible');
  }
}

/* ───────────────────────────────────────────────────── MOOD 
   / MESSAGE SYSTEM
───────────────────────────────────────────────────────*/ 
function setupMoodSelector() {
  if (!els.moodSelector) return;

  const buttons = 
  els.moodSelector.querySelectorAll('.mood-btn'); 
  buttons.forEach(btn => {
    btn.addEventListener('click', () => { const mood = 
      btn.dataset.mood;

      // Reset active state
      buttons.forEach(b => { b.classList.remove('active'); 
      b.setAttribute('aria-pressed', 'false'); }); 
      btn.classList.add('active'); 
      btn.setAttribute('aria-pressed', 'true');

      // Pick mood (surprise = random)
      let selectedMood = mood; if (mood === 'surprise') {
        const keys = Object.keys(MESSAGES); selectedMood = 
        keys[Math.floor(Math.random() * keys.length)];
      }

      state.currentMood = selectedMood; state.lastMessageIndex 
      = -1; showMessage(selectedMood);
    });
  });

  els.messageNextBtn.addEventListener('click', () => { if 
    (state.currentMood) showMessage(state.currentMood);
  });
}

function showMessage(mood) { const pool = MESSAGES[mood]; if 
  (!pool || pool.length === 0) return;

  // Avoid immediate repeat
  let index; do {
    index = Math.floor(Math.random() * pool.length);
  } while (index === state.lastMessageIndex && pool.length > 
  } 1);
  state.lastMessageIndex = index;

  // Show display
  els.messageDisplay.setAttribute('aria-hidden', 'false'); 
  els.messageDisplay.classList.add('visible');

  // Fade out body, update, fade in
  els.messageBody.classList.remove('visible'); setTimeout(() 
  => {
    els.messageBody.textContent = pool[index]; setTimeout(() 
    => {
      els.messageBody.classList.add('visible');
    }, 80);
  }, 400);
}

/* ───────────────────────────────────────────────────── 
   TYPOGRAPHY SEQUENCE (Scene 05)
───────────────────────────────────────────────────────*/ 
function setupTypoSequence() {
  // Will be triggered by IntersectionObserver
}

function startTypoSequence() { if (state.typoActive) return; 
  state.typoActive = true;

  const words = els.typoSequence ? 
  els.typoSequence.querySelectorAll('.typo-word') : []; if 
  (!words.length) return;

  const displayDuration = 2200; const fadeDuration = 600;

  let current = 0;

  function showWord(i) { if (i >= words.length) {
      // After all words, show the letter
      setTimeout(() => { if (els.scene05Letter) 
        els.scene05Letter.classList.add('revealed');
      }, 600);
      return;
    }

    const word = words[i];
    // Hide others
    words.forEach(w => { w.classList.remove('show'); 
    w.classList.add('hide'); }); 
    word.classList.remove('hide'); 
    word.removeAttribute('aria-hidden');

    // Small delay then show
    setTimeout(() => { word.classList.add('show');
    }, 50);

    // After display, fade and advance
    setTimeout(() => { word.classList.remove('show'); 
      word.classList.add('hide'); setTimeout(() => {
        showWord(i + 1);
      }, fadeDuration);
    }, displayDuration);
  }

  showWord(0);
}

/* ───────────────────────────────────────────────────── FINAL 
   SCENE
───────────────────────────────────────────────────────*/ 
function setupFinalScene() {
  // Triggered by IntersectionObserver
}

function startFinalSequence() { if 
  (state.finalSequenceStarted) return; 
  state.finalSequenceStarted = true;

  const lines = els.finalSequence ? 
    els.finalSequence.querySelectorAll('.final-line, 
    .final-to-be')
    : [];

  lines.forEach(line => { const delay = 
    parseInt(line.dataset.delay || 0, 10); setTimeout(() => {
      line.classList.add('visible');
    }, delay);
  });

  // Show credits
  const creditsDelay = 9500; setTimeout(() => {
    if (els.creditsWrap) {
      els.creditsWrap.removeAttribute('aria-hidden'); 
      els.creditsWrap.classList.add('visible');
    }
  }, creditsDelay);

  // Show replay button
  setTimeout(() => { if (els.finalActions) 
    els.finalActions.classList.add('visible');
  }, creditsDelay + 1000);
}

/* ───────────────────────────────────────────────────── 
   REPLAY
───────────────────────────────────────────────────────*/ 
function setupReplay() {
  if (!els.replayBtn) return; 
  els.replayBtn.addEventListener('click', () => {
    // Fade to black
    const overlay = document.createElement('div'); 
    overlay.style.cssText = `
      position:fixed; inset:0; z-index:9999; 
      background:var(--c-void); opacity:0; transition:opacity 
      1s; pointer-events:all;
    `; document.body.appendChild(overlay); setTimeout(() => { 
    overlay.style.opacity = '1'; }, 50); setTimeout(() => { 
    window.scrollTo(0, 0); location.reload(); }, 1200);
  });
}

/* ───────────────────────────────────────────────────── 
   SCROLL REVEAL + SCENE TRACKING
───────────────────────────────────────────────────────*/ 
function setupScrollReveal() {
  // Reveal animations
  const revealEls = document.querySelectorAll( '.reveal-text, 
    .reveal-para, .reveal-block'
  );

  const revealObserver = new IntersectionObserver(entries => { 
    entries.forEach(entry => {
      if (entry.isIntersecting) { 
        entry.target.classList.add('revealed'); 
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  // Scene tracking
  const scenes = 
  document.querySelectorAll('.scene[data-scene]'); const 
  sceneObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (!entry.isIntersecting) 
      return;

      const scene = entry.target.dataset.scene; if (!scene) 
      return;

      // Update indicator
      if (scene !== 'final') { els.sceneCurrentLbl.textContent 
        = scene;
      }

      // Trigger special scenes
      if (scene === '05' || entry.target.id === 'scene05') { 
        startTypoSequence();
      }
      if (scene === 'final' || entry.target.id === 
        'finalScene') { startFinalSequence();
      }
    });
  }, { threshold: 0.3 });

  scenes.forEach(s => sceneObserver.observe(s));
}

/* ───────────────────────────────────────────────────── KICK 
   OFF
───────────────────────────────────────────────────────*/ 
document.addEventListener('DOMContentLoaded', init);
