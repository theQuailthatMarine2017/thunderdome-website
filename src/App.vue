<template>
    <div id="app">
     <video ref="videoRef" autoplay playsinline muted style="height:100vh;width:100vw;">
       
      <source src="../public/Video.mp4" type="video/mp4">
    </video>

    <!-- Optional: some overlay text to describe the video -->
    <!-- <div class="content"> -->
      
      <!-- Use a button to pause/play the video with JavaScript -->
      <!-- <button id="myBtn" onclick="myFunction()">View Menu</button>
    </div> -->
   
   <section class="section" style="height:600px;background-position: center center;background-color:white;color:white;background-image:linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.2)), url(https://i.ibb.co/hBcmVsw/Mad-Max-Fury-Road-247-ft.jpg);background-size:cover;background-repeat:no-repeat;">
    <div class="container">
      <h1 class="title" style="color:white;font-weight:bolder;font-size:40px;text-align:center;">Our Menu Includes</h1>

      <carousel v-if="!isMobile()" :centerMode="true" style="justify-content:center;margin:0;" autoplay loop :autoplayTimeout="2000" :perPage="3" :paginationEnabled="false">
  <slide style="margin-right:5px;margin-left:5px;">
    <h1 style="font-weight:bolder;font-size:25px;text-align:center;">BURGERS</h1>
    <img style="height:250px;width:600px;" src="https://sterlingpacificmeat.com/wp-content/uploads/2018/04/gourmet-burger.jpg" alt="Avatar">
  </slide>
  <slide style="margin-right:5px;margin-left:5px;">
    <h1 style="font-weight:bolder;font-size:25px;text-align:center;">SAUSAGES</h1>
    <img style="height:250px;width:600px;" src="https://st.depositphotos.com/1003814/3290/i/950/depositphotos_32903185-stock-photo-grilled-sausages-with-chips-and.jpg" alt="Avatar">
  </slide>
  <slide style="margin-right:5px;margin-left:5px;">
    <h1 style="font-weight:bolder;font-size:25px;text-align:center;">HOT DOGS</h1>
    <img style="height:250px;width:600px;" src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/8/25/0/KC1806_Spicy-Pineapple-Relish_s4x3.jpg.rend.hgtvcom.826.620.suffix/1535214434384.jpeg" alt="Avatar">
  </slide>
  <slide style="margin-right:5px;margin-left:5px;">
    <h1 style="font-weight:bolder;font-size:25px;text-align:center;">BEERS</h1>
    <img style="height:250px;width:600px;" src="https://images.saymedia-content.com/.image/t_share/MTc0NjE5ODY0NDY0MDQxOTI5/30-foods-you-should-eat-in-kenya.jpg" alt="Avatar">
  </slide>
  <slide style="margin-right:5px;margin-left:5px;">
    <h1 style="font-weight:bolder;font-size:25px;text-align:center;">SOFT DRINKS</h1>
    <img style="height:250px;width:1000px;" src="https://content3.jdmagicbox.com/comp/def_content/soft-drink-retailers/shutterstock-1457239913-soft-drink-retailers-3-5wxtb.jpg?clr=3e2828" alt="Avatar">
  </slide>
  
</carousel>

<carousel v-if="isMobile()" :centerMode="true"  autoplay loop :autoplayTimeout="2000" :perPage="1" :paginationEnabled="false">
  <slide >
    <h1 style="font-weight:bolder;font-size:25px;text-align:center;">BURGERS</h1>
    <img style="height:250px;width:600px;" src="https://sterlingpacificmeat.com/wp-content/uploads/2018/04/gourmet-burger.jpg" alt="Avatar">
  </slide>
  <slide >
    <h1 style="font-weight:bolder;font-size:25px;text-align:center;">SAUSAGES</h1>
    <img style="height:250px;width:600px;" src="https://st.depositphotos.com/1003814/3290/i/950/depositphotos_32903185-stock-photo-grilled-sausages-with-chips-and.jpg" alt="Avatar">
  </slide>
  <slide >
    <h1 style="font-weight:bolder;font-size:25px;text-align:center;">HOT DOGS</h1>
    <img style="height:250px;width:600px;" src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/8/25/0/KC1806_Spicy-Pineapple-Relish_s4x3.jpg.rend.hgtvcom.826.620.suffix/1535214434384.jpeg" alt="Avatar">
  </slide>
  <slide >
    <h1 style="font-weight:bolder;font-size:25px;text-align:center;">BEERS</h1>
    <img style="height:250px;width:600px;" src="https://images.saymedia-content.com/.image/t_share/MTc0NjE5ODY0NDY0MDQxOTI5/30-foods-you-should-eat-in-kenya.jpg" alt="Avatar">
  </slide>
  <slide >
    <h1 style="font-weight:bolder;font-size:25px;text-align:center;">SOFT DRINKS</h1>
    <img style="height:250px;width:1000px;" src="https://content3.jdmagicbox.com/comp/def_content/soft-drink-retailers/shutterstock-1457239913-soft-drink-retailers-3-5wxtb.jpg?clr=3e2828" alt="Avatar">
  </slide>
  
</carousel>

<!-- <div class="row">
  <div class="columns is-desktop">
        <div class="column ">
          <img style="width:300px;height:200px;" src="https://sterlingpacificmeat.com/wp-content/uploads/2018/04/gourmet-burger.jpg" alt="Avatar">
          <h1 style="font-weight:bolder;font-size:20px;">BURGERS</h1>
        </div>
        <div class="column ">
          <img style="width:300px;height:200px;" src="https://img.delicious.com.au/9t6lL0wz/w759-h506-cfill/del/2015/10/sausage-coils-with-pan-fried-potatoes-12672-1.jpg" alt="Avatar">
          <h1>SAUSAGES</h1>
        </div>
        <div class="column ">
          <img style="width:300px;height:200px;" src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/8/25/0/KC1806_Spicy-Pineapple-Relish_s4x3.jpg.rend.hgtvcom.826.620.suffix/1535214434384.jpeg" alt="Avatar">
          <h1>HOT DOG</h1>
        </div>

        <div class="column ">
          <img style="width:300px;height:200px;" src="https://images.saymedia-content.com/.image/t_share/MTc0NjE5ODY0NDY0MDQxOTI5/30-foods-you-should-eat-in-kenya.jpg" alt="Avatar">
          <h1>BEERS</h1>
        </div>

        <div class="column ">
          <img style="width:300px;height:200px;" src="https://content3.jdmagicbox.com/comp/def_content/soft-drink-retailers/shutterstock-1457239913-soft-drink-retailers-3-5wxtb.jpg?clr=3e2828" alt="Avatar">
          <h1>SOFT DRINKS</h1>
        </div>
      </div>

      




</div> -->
      

    </div>
  </section>

  <section class="section" style="background-color:white;;text-align:right;">
    <div class="container">
      <div class="row">
        <div class="columns">

          <div class="column is-three-quarter" style="height:480px;background-position: center center;background-color:white;color:white;background-image: url(https://madmax.co.ke/wp-content/uploads/2020/09/madmax-9.jpg);background-size: cover;background-repeat:no-repeat;">
                

          </div>
          <div class="column is-quarter">

            <h1 class="title" style="color:black;font-weight:bolder;font-size:40px;text-align:right;">MAD MAX CARTING,<br/>TWO RIVERS.</h1>
            <h2 style="font-weight:bold;color:black;font-size:18px;">We are located at the Mad Max Carting within Two Rivers Mall. Come enjoy a meal while watching races or better yet have a go on the track!</h2>
<img style="justify-content:right;margin-top:5px;" src="https://i.ibb.co/LQDSzfB/logo.png" alt="Screenshot-2020-12-13-at-3-06-55-PM" border="0">       </div>
        </div>

    </div>
    </div>
  </section>

<section class="section" style="background-color:grey;text-align:left;">
    <div class="container">
      <div class="row">
        <div class="columns">

          <div class="column is-quarter">

            <h1 class="title" style="color:white;font-weight:bolder;font-size:35px;text-align:left;">EMPOWERING,<br/>KENYAN YOUTH.</h1>
            <h2 style="font-weight:bold;color:white;font-size:18px;">We believe the future of any economy is empowering young people with opportunities to better themselves. Through our partnership with CENTUM & TRIBUS GROUP, we plan to empower Kenyan youth by providing job opportunities.</h2>
          <div class="row" style="margin-top:10px;">

            <!-- <div class="columns">
              <div class="column">
                <img style="width:240px;height:240px;" src="https://centum.co.ke/templates/g5_hydrogen/custom/images/logo_1.png" alt="Avatar">
              </div>
              <div class="column">
                <img style="width:240px;height:240px;" src="https://www.tribus-tsg.com/img/tribus-logo.jpg" alt="Avatar">
              </div>

            </div> -->
          </div>

          </div>

          <div class="column is-three-quarter" >
            <video style="outline :none;" ref="videoRef" autoplay playsinline controls>
       
              <source src="../public/dummy.mp4" type="video/mp4">
            </video>
          </div>
          
        </div>

    </div>
    </div>
  </section>

  <footer class="site-footer">
      <div class="container">
        <div class="row" style="margin-left:10px;">

          <div class="col-xs-6 col-md-3">
            <h6>Contact Information</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Designed & Managed by 
         <a href="#"><strong>Rony Quail</strong></a>.
            </p>
          </div>

         
        </div>
      </div>
</footer>

    </div>
  
</template>

<script>

export default {
  name: 'App',
  mounted: function() {
    
    this.$refs.videoRef.play();
  },
  methods: {
 isMobile() {
   if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
     return true
   } else {
     return false
   }
  }
  }
  
}
</script>

<style>

#app{
  background-color: #000;
  
}
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}

/* Add some content at the bottom of the video/page */
.content {
  position: fixed;
  bottom: 0;
  color: #f1f1f1;
  width: 100%;
  padding: 40px;
}

/* Style the button used to pause/play the video */
#myBtn {
  min-width: 200px;
  height: 35px;
  font-size: 18px;
  font-weight: bolder;
  border-radius: 10px;
  border:none;
  background: whitesmoke;
  color: black;
  cursor: pointer;
}

#myBtn:hover {
  background: green;
  color: white;
}

.site-footer
{
  background-color:#26272b;
  padding:45px 0 20px;
  font-size:15px;
  line-height:24px;
  color:#737373;
}
.site-footer hr
{
  border-top-color:#bbb;
  opacity:0.5
}
.site-footer hr.small
{
  margin:20px 0
}
.site-footer h6
{
  color:#fff;
  font-size:16px;
  text-transform:uppercase;
  margin-top:5px;
  letter-spacing:2px
}
.site-footer a
{
  color:#737373;
}
.site-footer a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links
{
  padding-left:0;
  list-style:none
}
.footer-links li
{
  display:block
}
.footer-links a
{
  color:#737373
}
.footer-links a:active,.footer-links a:focus,.footer-links a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links.inline li
{
  display:inline-block
}
.site-footer .social-icons
{
  text-align:right
}
.site-footer .social-icons a
{
  width:40px;
  height:40px;
  line-height:40px;
  margin-left:6px;
  margin-right:0;
  border-radius:100%;
  background-color:#33353d
}
.copyright-text
{
  margin:0
}
@media (max-width:991px)
{
  .site-footer [class^=col-]
  {
    margin-bottom:30px
  }
}
@media (max-width:767px)
{
  .site-footer
  {
    padding-bottom:0
  }
  .site-footer .copyright-text,.site-footer .social-icons
  {
    text-align:center
  }
}
.social-icons
{
  padding-left:0;
  margin-bottom:0;
  list-style:none
}
.social-icons li
{
  display:inline-block;
  margin-bottom:4px
}
.social-icons li.title
{
  margin-right:15px;
  text-transform:uppercase;
  color:#96a2b2;
  font-weight:700;
  font-size:13px
}
.social-icons a{
  background-color:#eceeef;
  color:#818a91;
  font-size:16px;
  display:inline-block;
  line-height:44px;
  width:44px;
  height:44px;
  text-align:center;
  margin-right:8px;
  border-radius:100%;
  -webkit-transition:all .2s linear;
  -o-transition:all .2s linear;
  transition:all .2s linear
}
.social-icons a:active,.social-icons a:focus,.social-icons a:hover
{
  color:#fff;
  background-color:#29aafe
}
.social-icons.size-sm a
{
  line-height:34px;
  height:34px;
  width:34px;
  font-size:14px
}
.social-icons a.facebook:hover
{
  background-color:#3b5998
}
.social-icons a.twitter:hover
{
  background-color:#00aced
}
.social-icons a.linkedin:hover
{
  background-color:#007bb6
}
.social-icons a.dribbble:hover
{
  background-color:#ea4c89
}
@media (max-width:767px)
{
  .social-icons li.title
  {
    display:block;
    margin-right:0;
    font-weight:600
  }
}
</style>
