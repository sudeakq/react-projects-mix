import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Card img="https://resizing.flixster.com/oeEk332AZGosp3h2HkCv5NqxXaA=/218x280/v2/https://flxt.tmsimg.com/assets/242993_v9_bb.jpg" title="Ted" description="A personable young actor who bore a strong resemblance to comedian Jimmy Fallon, Josh Radnor played the lovelorn Ted Mosby in the CBS sitcom  How I Met Your Mother (2005-14). The likable, quirky series marked his first lead after a string of guest appearances on television shows and movies, as well as several high profile theatrical gigs." />
      <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1q4PcOBr4K2JPavRf2ADPtZo49wajcRuY43lLDhUVig&s" title="Barney" description="Neil Patrick Harris, Emmy ve Altın Küre adayı olmuş Amerikalı sinema ve dizi oyuncusudur. Canlandırdığı önemli karakterler arasında Doogie Howser, M.D., Yıldız Gemisi Askerleri filmindeki Albay Carl Jenkins ve How I Met Your Mother dizisindeki kadın avcısı Barney Stinson yer alır." />
      <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uvjgO4yWXLjjy7Z7f-yewqCGj1O8EmFknrU_vYkx&s" title="Robin" description="Jacoba Francisca Maria  Smulders, Kanadalı aktris. CBS Sitcom How I Met Your Mother'da Robin Scherbatsky ve S.H.I.E.L.D. ajan Maria Hill, Marvel Sinematik Evreni süper kahraman filmlerinde " />
    </div>
  );
}

export default App;
