const homepage = Vue.createApp({
    template: `<div class="menu-bar" @click="toggleDropDown">
                <nav ><a>ABOUT ME</a>
                    <a>PROJECT</a>
                    <a>CONTACT</a>
                    <a><i class="bi bi-globe"></i></a>
                </nav>
              </div>
              <div class="greed-msg-box">
                  <div id="greed-msg">
                    <div>HELLO!!I'm MYAT EAINDRAY KYAW</div>
                    <div class="font-style-1">I'm a System Engineer</div>
                  </div>
                  <div ><img src="developer_pic.png" id="dev-img"></div>
              </div>
              <div class="block-title scroll-effect">
                  <div><h1>AboutMe</h1></div>
                  <div class="myself">
                    <span>I'm Myat Eaindray Kyaw.I from Myanmar.</span><br>
                    <span>I worked as System Engineer in Japan.</span><br>
                    <span>I hold a Bachelor of Engineering(Information and Science Technology) from the 
                      University of Technology(Yatanarpon Cyber City).</span><br>
                  </div>
              </div>
              <div class="block-title proj-scroll-effect">
                  <div><h1>Projects</h1></div>
<div class="projs">
                      <div class="food-order-system">                       
                          
                          <div>
                              <h1 >Project X</h1>
                              <i class="bi bi-cart3"></i></div>
                              <div class="proj-btn">
                                  <div class="btn">Live Demo</div>
                                  <div class="btn">GitHub Repo</div>
                              </div>
                      </div>
                      <div class="food-order-system">
                          <div>
                              <h1 >Project Z</h1>
                              <i class="bi bi-cart3"></i></div>
                              <div class="proj-btn">
                                  <div class="btn">Live Demo</div>
                                  <div class="btn">GitHub Repo</div>
                              </div>
                      </div>
                      <div class="food-order-system">                       
                          
                          <div>
                              <h1 >Project Z</h1>
                              <i class="bi bi-cart3"></i></div>
                              <div class="proj-btn">
                                  <div class="btn">Live Demo</div>
                                  <div class="btn">GitHub Repo</div>
                              </div>
                      </div></div>
              </div>
              <div class="block-title">
                  <div><h1>Contact</h1></div>
                  <div class="myself">

                  </div>
              </div>

                

    
    `

})


homepage.mount('#homepage')