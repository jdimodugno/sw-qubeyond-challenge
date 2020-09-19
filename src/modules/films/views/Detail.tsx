import React, { FC, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../../context/GlobalContext';
import FilmsClient from '../../../http/clients/Films';
import IEntity from '../../../interfaces/domain/IEntity';
import IFilm from '../../../interfaces/domain/IFilm';
import DetailView from '../../../views/Detail/DetailView';

const FilmDetail : FC = () => {
  const { id } = useParams<IEntity>();
  const { films } = useContext(GlobalContext);
  const [loading, setLoading] = useState<boolean>(true)
  const [entity, setEntity] = useState<IFilm>();

  useEffect(() => {
    if (id) {
      setLoading(true);
      const page = films?.fetchedIds[id] || 0;
      if (page) {
        setEntity(films?.pages[page].find(entry => entry.id === id));
        setLoading(false);
      }
      else {
        const client = new FilmsClient();
        client.readById(id)
          .then((data) => {
            setEntity(data);
            setLoading(false);
          });
      }
    }
  }, [films, id, setLoading, setEntity]);

  return loading ? (
    <div>123</div>
  ) : (
    <DetailView
      entity={entity}
    />
  );
}

export default FilmDetail;