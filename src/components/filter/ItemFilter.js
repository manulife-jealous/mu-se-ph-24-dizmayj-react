import { Pill } from '@manulife/mux';
import { useState } from "react";


const ALL = 'all';

const ItemFilter = ({data}) => {
  // const pills = [
  //   { value: ALL, label: 'All' },
  //   {
  //     value: 'featured',
  //     label: 'Featured',
  //     card: (
  //       <div>Featured</div>
  //     ),
  //   },
  //   {
  //     value: 'insight',
  //     label: 'Insight',
  //     card: (<>
  //       <div>Insight 1</div>
  //       <div>Insight 2</div></>
  //     ),
  //   },
  //   {
  //     value: 'career',
  //     label: 'Career',
  //     card: (
  //       <div>Career</div>
  //     ),
  //   },
  // ];
  const pills = data;
  const pillValues = pills.reduce((acc, pill) => [...acc, pill.value], []);
  const pillCards = pills.reduce(
    (acc, pill) => ({ ...acc, [pill.value]: pill.card }),
    {},
  );

  const [cardsList, setCardsList] = useState(new Set(pillValues));
  const [selectedPills, setSelectedPills] = useState(
    // set each value to false except ALL
    pills.reduce((acc, pill) => ({ ...acc, [pill.value]: pill.value === ALL }), {}),
  );

  function handleSelect(pillToAdd) {
    setSelectedPills((selected) => {
      return pillToAdd === ALL
        ? { [ALL]: true }
        : { ...selected, [ALL]: false, [pillToAdd]: !selected[pillToAdd] };
    });
    setCardsList((cards) => {
      if (pillToAdd === ALL) {
        return new Set([...cards, ...pillValues]);
      }
      if (cards.has(ALL)) {
        return new Set([pillToAdd]);
      }
      if (cards.has(pillToAdd)) {
        cards.delete(pillToAdd);
      } else {
        cards.add(pillToAdd);
      }
      return cards;
    });
  }

  return (
    <>
    <div style={{margin: '10px'}}>
      <Pill.Box multiselectable aria-label="Faceted Navigation">
        {pills.map((pill) => (
          <Pill
            key={pill.value}
            label={pill.label}
            value={pill.value}
            selected={selectedPills[pill.value]}
            onSelect={(value) => handleSelect(value)}
            customStyle={{ rootStyle: { marginRight: '10px' } }}
          />
        ))}
      </Pill.Box>
      <div style={{ display: 'flex', marginTop: '20px' }}>
        {[...cardsList].map((value) => (
          <div key={value}>{pillCards[value]}</div>
        ))}
      </div>
    </div>
     
    </>
  );
};

export default ItemFilter;