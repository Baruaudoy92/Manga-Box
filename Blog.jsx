import React from 'react'
import "./blog.css";

function Blog() {
  return (
    <div className='blog'>
    <div className='headers'>
    <div className="headerTitless">
     <span className="headerTitleSmm">React & Node</span>
     <span className="headerTitleLgg">Blog</span>
    </div>
    <img className="headerImgs" src="https://media.tenor.com/Wajjgq5T71gAAAAd/gto-great-teacher-onizuka.gif" alt=""/>
 </div>
 <div className="post">
        <img className="postImg" 
        src="https://i.pinimg.com/564x/d2/3c/a5/d23ca53a07f645068dabf61103cc50ac.jpg" alt=" "
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">HORROR</span>
                <span className="postCat">MONIKA  </span>
            </div>
            <span className="postTitle">湘南純愛組, est un shōnen manga de Tōru Fujisawa</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Monika raconte la jeunesse d'Eikichi Onizuka (personnage principal de Monika) et de son meilleur ami Ryuji Danma.</p>
    </div>
    <div className="post-1">
        <img className="postImg" 
        src="https://i.pinimg.com/564x/02/d2/d6/02d2d615d46f7f7d63a5d6484036c8a6.jpg" alt=" "
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">ASSASSINS</span>
                <span className="postCat">HUNTER X HUNTER</span>
            </div>
            <span className="postTitle">Dragon Boy</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc"> Killua est le deuxième enfant d'une famille d'assassins connus, la famille Zoldyck. Très prometteur dès sa naissance, Killua a déjà maîtrisé de nombreuses techniques de meurtre à un âge très jeune, et est destiné à devenir l'un des meilleurs assassins que la famille ait jamais produit.</p>
    </div>
    <div className="post-2">
        <img className="postImg" 
        src="https://i.pinimg.com/564x/06/37/a5/0637a563959c3c8387af94c49187089f.jpg" alt=" "
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">FIGHT</span>
                <span className="postCat">BAKI</span>
            </div>
            <span className="postTitle">Baki グラップラー刃牙</span>
            <hr />
            <span className="postDate">3 hour ago</span>
        </div>
        <p className="postDesc"> Baki Hanma possédant des capacités physiques incroyables héritées de son père, Yujiro Hanma, « la créature la plus forte du monde », aussi appelé « l'Ogre ».</p>
    </div>
    <div>
    <img className="headerImgs" src="https://i.pinimg.com/originals/fb/49/ee/fb49eeba2e686240a99729766cf72bf3.gif" alt="gojo"/>
 </div>
 </div>
  )
}

export default Blog;