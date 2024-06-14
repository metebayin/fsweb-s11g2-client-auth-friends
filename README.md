# Client Auth Modül Projesi: Friends

Bugün istemci tarafında auth-tokenlar kullanarak nasıl authentication yapılır bunu incelediniz. Modül boyunca kullanıcı logini, istekleri ve logout işlemleri gibi authentication özelliklerini öğrendiniz. Bu projede bunları pekiştireceksiniz.

## Giriş

Bu projede, Friends castından gelen verilerle etkileşimde bulunmanıza izin veren uç noktalara sahip yerel bir sunucuya bağlanacaksınız. Bu datayı temel olarak alıp, projenize login, display ve bileşen ekle sayfaları ekleyeceksiniz.

API Friends karakterlerinin bir listesini tutuyor ve ekleme, silme ve düzenleme yapmanıza olanak tanıyor. API uç noktalarının tümü (oturum açma uç noktası hariç) "korumalı" kabul edilir; bu, isteği başlıkta bir kimlik doğrulama belirteci ile yapmanız gerektiği anlamına gelir, aksi takdirde API bir "401" hatası geri gönderir. API'mizin "http://localhost:9000"de sunduğu uç noktalara bir göz atın.

- **[POST]** \* `/api/login`: diğer tüm requestlerin headerınına eklenmesi gereken bir token döndürür. İsteğin `body` si olara şu kriterleri gönderin: `{ username: ' ', password: 'wecandoit' }`
- **[POST]** \* `/api/logout`: kullanımdaki bir tokenı siler. inaktif bir token döndürür.
- **[GET]** `/api/friends`: Friends karakterlerini döndürür.
- **[GET]** `/api/friends/123`: id si URL'ye girilen karakteri döndürür (123 temsili bir değerdir)
- **[POST]** \* `/api/friends`: Yeni bir karakter ekler.

Tüm karakter nesneleri aşağıdaki biçimdedir:

```js
{
  id: 1
  name: 'Joe',
  age: 24,
  email: 'joe@schoolintech.com',
}
```

**_Görevlerinizi tek tek tamamladığınızdan ve ilerlemeden önce her bir görevi test ettiğinizden emin olun.._**

## Talimatlar

### Görev 1: Proje Kurulumu

- [ ] Forklayın.
- [ ] Klonlayın
- [ ] Ana dizine gidin
- [ ] `npm install`
- [ ] `npm start`

### Görev 2: Proje Gereksinimleri

#### Login (kullanıcı girişi) bileşenini oluşturun

- [ ] Örnekteki login sayfası gibi [mockup](./designs/login_mockup.png) bir login bileşeni oluşturun.
- [ ] `App.js` içine, `/` ya da `/login` ziyaret edildiğinde bu bileşeni gösteren bir route ekleyin
- [ ] Login formu gönderildiğinde, döndürülen tokeni localStorage e kaydedin ve sayfayı FriendsList sayfasına yönlendirin

#### FriendsList bileşenini oluşturun

- [ ] Örnektesi `FriendsList` [mockup](./designs/friendslist_mockup.png) gibi bir bileşen oluşturun.
- [ ] Bileşen bağlandığında, tüm karakterleri gönderen bir API call oluşturun. Bunun korumalı bir route olduğunu unutmayın.
- [ ] `App.js` içinde, `/friends` ziyaret edildiğinde bu bileşeni görüntüleyen bir route ekleyin
- [ ] Login bileşeninize, oluşturduğunuz `FriendsList` bileşenine yönlendirme kabiliyeti ekleyin.

#### addFriends bileşeni oluşturun

- [ ] Örnekteki `AddFriend` [mockup](./designs/addfriends_mockup.png) gibi bir karakter ekleme bileşeni oluşturun.
- [ ] Tüm karakter özellikleri için inputlar ve bir submit butonu içeren bir bileşen olmalı
- [ ] Form gönderildiğinde, uygun api uç noktasına yeni karakter datanızı gönderen bir sorgu atın. Bunun korumalı bir route olduğunu unutmayın.
- [ ] `App.js` içinde, `/friends/add` ziyaret edildiğinde bu bileşeni görüntüleyen bir route ekleyin.

#### Logout butonu oluşturun

- [ ] Uygulamanızdan çıkış yapmanızı sağlayan bir logout bileşeni oluşturun.
- [ ] Bu bileşen logout uç noktasına sorgu atacak ve local storageda kayıtlı tokenı silecek.
- [ ] `App.js` içinde , `/logout` ziyaret edildiğinde bu bileşeni görüntüleyen bir route ekleyin.
- [ ] `App.js` içinde, kullanıcının logout, karakter listesi ve karakter ekleme sayfalarına ulaşabileceği navigasyonlar oluşturun.

#### /friends ve /friends/add routlarını korumak

- [ ] Eğer local storage a kayıtlı bir token yoksa bu url ler ziyaret edildiğinde login routeuna sayfa yönlendirilsin.

### Görev 3: Esnek görevler

- [ ] axiosWithAuth kullanarak korumalı uç noktalara erişmeyi deneyin.
- [ ] Karakterlerin bilgilerini göstermeye yarayan bir route oluşturun. Karakter id sini `useParams` kullanarak alın.
- [ ] Uygulamayı stilleyin.
