import styles from './Card.module.scss';
import ContentLoader from 'react-content-loader';
import React from 'react';
import AppContext from '../../context';
import { InView, useInView } from 'react-intersection-observer';

function Card({
  id,
  name,
  data,
  imageURL,
  onFavorite,
  favorited = false,
  loading = false,
}) {
  // const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const obj = { id, parentId: id, name, data, imageURL };

  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };

  // const {ref, InView} = useInView ({
  //   threshold: 0.5,
  // })

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="1" y="20" rx="10" ry="10" width="155" height="100" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavorite && (
            <div className={styles.favorite} onClick={onClickFavorite}>
              <img className={styles.isLiked} src={isFavorite ? 'img/liked.svg' : 'img/toLike.jpg'} alt="Unliked" />
            </div>
          )}
          {/* <div ref={ref} className={styles.image}>
            {
              InView ? <img width="100%" height={135} src={imageURL} alt="Портрет" /> : <img className={styles.skeleton} width="100%" height={135} />
            }
          </div> */}
          <img width="100%" height={135} src={imageURL} alt="Портрет" />
          <h5>{name}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Годы жизни:</span>
              <b>{data}</b>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

 export default Card;
