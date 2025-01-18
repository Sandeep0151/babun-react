import { IMenu } from "../types/menu-d-t";


const menu_data:IMenu[] = [
  {
    id:1,
    link:'/home-loan',
    title:'Home Loan',

  },
  {
    id:2,
    link:'/calculators',
    title:'Calculators',
    dropdown:true,
    dropdown_menus:[
      {link:'/calculators/emi-calculator',title:'EMI Calculator'},
      {link:'/calculators/emi-calculator-2',title:'EMI Calculator 2'},
      {link:'/calculators/home-loan-eligibility-calculator',title:'Home Loan EMI Calculator'},
      {link:'/calculators/home-loan-prepayment-calculator',title:'Home Loan PrePayment'},
    ]
  },
  {
    id:3,
    link:'/credit-score',
    title:'Credit Score',

  },
  {
    id:4,
    link:'/about-us-2',
    title:'About us',

  },
  {
    id:5,
    link:'/contact',
    title:'Contact'
  }
]

export default menu_data;