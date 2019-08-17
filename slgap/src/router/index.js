import Vue from 'vue'
import Router from 'vue-router'

import Front from '@/components/Front'
import signup from '@/components/Signup'
import login from '@/components/login'
import verify from '@/components/verifycode'



//Farmer route
import nav from '@/components/farmer/farmer_nav'
import farmer_home from '@/components/farmer/farmer_home'
import farmer_tab from '@/components/farmer/farmer_tab'
import manage_tab from '@/components/farmer/manage_tab'
import history_tab from '@/components/farmer/plant_history_tab'
import qrcode from '@/components/farmer/qr_tab'
import recomnedations from '@/components/farmer/recomendation_tab'
import market from '@/components/farmer/market_tab'
import profile from '@/components/farmer/profile'


//Customer route
import customer from '@/components/Customer/CustomerTab'
import buy from '@/components/Customer/BuyProduct'


//AI route
import AIFront from '@/components/AI/AIFront'
import AIHome from '@/components/AI/AIHome'
import AIRequests from '@/components/AI/AIRequests'
import AIAudit from '@/components/AI/AIAudit'
import AIFarmers from '@/components/AI/AIFarmers'
import AICrops from '@/components/AI/AICrops'
import AIChemical from '@/components/AI/AIChemical'
import AIFertilizer from '@/components/AI/AIFertilizer'



//CAB route
import CabFront from '@/components/Cab/CabFront'
import CabHome from '@/components/Cab/CabHome'
import CabRequests from '@/components/Cab/CabRequests'
import CabAudit from '@/components/Cab/CabAudit'
import CabFarmers from '@/components/Cab/CabFarmers'
import CabCrops from '@/components/Cab/CabCrops'
import CabChemical from '@/components/Cab/CabChemical'
import CabAIs from '@/components/Cab/CabAIs'







Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Front',
      component: Front,
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup,
    },
    {
      path: '/verify',
      name: 'verify',
      component: verify,
    },


    //FARMER ROUTES
    {
      path: '/farmer',
      name: 'farmer_home',
      component: farmer_home,
    },   
          //gap form apply
          {
            path: '/farmer_tab',
            name: 'farmer_tab',
            component: farmer_tab
          },
          //plant manage tab
          {
            path: '/manage_tab',
            name: 'manage_tab',
            component: manage_tab
          },
          //plant history tab
          {
            path:'/history',
            name:history_tab,
            component: history_tab
          },
          //QR code genarate
          {
            path: '/qrcode',
            name: 'qrcode',
            component: qrcode
          },

          //recomendation tab
          {
            path:'/recomnedations',
            name:'recomnedations',
            component:recomnedations
          },
          //market tab
          {
            path:'/market',
            name:'market',
            component:market
          },
          //profile tab
          {
            path:'/profile',
            name:'profile',
            component:profile
          },


    //login
          {
            path: '/login',
            name: 'login',
            component: login,
          },
          {
            path: '/nav',
            name: 'nav',
            component: nav,
          },

    //test
   /* {
      path: '/test',
      name: 'test',
      component: test,
    },*/



    //CAB ROUTES
    {
      path: '/cabfront',
      name: 'CabFront',
      component: CabFront,
    },
    {
      path: '/cabhome',
      name: 'CabHome',
      component: CabHome,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'requests',
          component: CabRequests
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'audit',
          component: CabAudit
         },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'farmers',
          component: CabFarmers
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'crops',
          component: CabCrops
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'chemical',
          component: CabChemical
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'ais',
          component: CabAIs
        }
      ]
    },



    //AI ROUTES
    {
      path: '/aifront',
      name: 'AIFront',
      component: AIFront,
    },
    {
      path: '/aihome',
      name: 'AIHome',
      component: AIHome,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'requests',
          component: AIRequests
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'audit',
          component: AIAudit
         },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'farmers',
          component: AIFarmers
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'crops',
          component: AICrops
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'chemical',
          component: AIChemical
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'fertilizer',
          component: AIFertilizer
        },
      ]
    },



    //CUSTOMER ROUTES
    {
      path:'/customer',
      name:'customer',
      component:customer
    },
    {
      path:'/buy',
      name:'buy',
      component:buy
    }
  ]
})
