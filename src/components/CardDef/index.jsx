import styles from './CardDef.module.scss';
import ContentLoader from 'react-content-loader';
import React from 'react';

function CardDef({
    id,
    name,
    data,
    // imageURL,
    // onFavorite,
    // favorited = false,
    loading = false,
  }) {
    const obj = { id, parentId: id, name, data };
    // const [isFavorite, setIsFavorite] = React.useState(favorited);
    // const obj = { id, parentId: id, name, data, imageURL };
  
    // const onClickFavorite = () => {
    //   onFavorite(obj);
    //   setIsFavorite(!isFavorite);
    // };
  
  
    return (
      <div className={styles.card}>
        {loading ? (
          <ContentLoader
            speed={2}
            width={170}
            height={250}
            viewBox="0 0 170 250"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <rect x="0" y="12" rx="12" ry="12" width="165" height="28" /> 
            <rect x="55" y="283" rx="3" ry="3" width="178" height="6" /> 
            <rect x="553" y="316" rx="3" ry="3" width="56" height="15" /> 
            <rect x="0" y="51" rx="12" ry="12" width="165" height="200" />
          </ContentLoader>
        ) : (
          <>
            <h5><b>{name}</b></h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Определение:</span>
                <p>{data}</p>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
  
   export default CardDef;
  