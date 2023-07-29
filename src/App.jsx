import Footer from './components/Footer';
import Section from './components/Section';


function App() {
  const navItem = ['Program', 'Bidang ilmu', 'Tentang edspert' ,'Masuk/Daftar'];

  const hero = ['jadi expert bersama edspert', 'tingkatkan skill dan pengetahuan bersama para mentor', 'terbaik di bidangnya, untuk siapkan karir impian anda'

  ];

  const contents = [
    {
      title: 'Programing Laravel',
      desc: 'Intensive Bootcamp',
      content: '(Getting started with Laravel 9)',
      program: 'Programming Laravel',
      info: 'Getting Started with Laravel 9',
      price: 'Rp. 560.000',
    },
    {
      title: 'Flutter',
      desc: 'Intensive Bootcamp',
      content: '(Getting started with Flutter)',
      program: 'Programming Flutter',
      info: 'Getting Started with Flutter',
      price: 'Rp. 490.000',
    },
    {
      title: 'React JS',
      desc: 'Intensive Bootcamp',
      content: '(Getting started with react JS)',
      program: 'Programming React JS',
      info: 'Getting Started with React JS',
      price: 'Rp. 499.000',

    },
     {
      title: 'React Native',
      desc: 'Intensive Bootcamp',
      content: '(Getting started with react Native)',
      program: 'Programming React Native',
      info: 'Getting Started with React Native',
      price: 'Rp. 666.000',
    },
     {
      title: 'Golang',
      desc: 'Intensive Bootcamp',
      content: '(Getting started with golang)',
      program: 'Programming Golang',
      info: 'Getting Started with Golang',
      price: 'Rp. 560.000',
    },
    {
      title: 'Microsoft Excel',
      desc: 'Intensive Bootcamp',
      content: '(Getting started with Excel)',
      program: 'Programming Excel',
      info: 'Getting Started with Excel',
      price: 'Rp. 210.000',
    },
    {
      title: 'Data Analytics',
      desc: 'Intensive Bootcamp',
      content: '(Getting started with Data Analytics)',
      program: 'Programming Data Analytics',
      info: 'Getting Started with Data Analytics',
      price: 'Rp. 1.200.000',
    },
    {
      title: 'IoT',
      desc: 'Intensive Bootcamp',
      content: '(Getting started with IoT)',
      program: 'Programming IoT',
      info: 'Getting Started with IoT',
      price: 'Rp. 920.000',
    },
    {
      title: 'Next Js',
      desc: 'Intensive Bootcamp',
      content: '(Getting started with Next Js)',
      program: 'Programming Next Js',
      info: 'Getting Started with Next Js',
      price: 'Rp. 500.000',
    },
    {
      title: 'Node Js',
      desc: 'Intensive Bootcamp',
      content: '(Getting started with Node Js)',
      program: 'Programming Node Js',
      info: 'Getting Started with Node Js',
      price: 'Rp. 690.000',
    },
    {
      title: 'HTML',
      desc: 'Intensive Bootcamp',
      content: '(Getting started with HTML)',
      program: 'Programming HTML',
      info: 'Getting Started with HTML',
      price: 'Rp. 320.000',
    },
    {
      title: 'CSS',
      desc: 'Intensive Bootcamp',
      content: '(Getting started with CSS)',
      program: 'Programming CSS',
      info: 'Getting Started with CSS',
      price: 'Rp. 350.000',
    }
  ]

  return (
    <>
      <header className='bg-[#152A46] text-white py-[28px] px-[120px] flex justify-between'>
        <h1 className='text-[20px] font-[700px]'>LOGO</h1>
        <nav>
            <ul className='m-0 p-0 justify-items-end list-none'>
                {navItem.map(item => <li className='inline-block mr-[10px]' key={item}><a className='text-white ' href="#">{item}</a></li>)}
            </ul>
        </nav>
      </header>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-[20px]'>
        {contents.map(item => (
          <Section key={item.title} title={item.title} content={item.content} price={item.price} desc={item.desc} program={item.program} info={item.info}/>
        ))}
      </div>
      <Footer />
    </>
  )
}

export default App
