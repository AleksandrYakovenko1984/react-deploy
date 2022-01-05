import { GlobalStyle } from './GlobalStyle';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <GlobalStyle />
      <Filter
        isOpen
        options={[
          { value: 'xs', label: 'очень маленький' },
          { value: 'sm', label: 'маленький' },
          { value: 'md', label: 'средний' },
          { value: 'lg', label: 'большой' },
          { value: 'xl', label: 'очень большой' },
          { value: '1', label: 'очень большой' },
          { value: '2', label: 'очень большой' },
          { value: '3', label: 'очень большой' },
          { value: '4', label: 'очень большой' },
          { value: '5', label: 'очень большой' },
          { value: '6', label: 'очень большой' },
          { value: '7', label: 'очень большой' },
          { value: '8', label: 'очень большой' },
          { value: '9', label: 'очень большой' },
          { value: '10', label: 'очень большой' },
          { value: '11', label: 'очень большой' },
          { value: '12', label: 'очень большой' },
          { value: '13', label: 'очень большой' },
        ]}
      />

      <Filter
        isOpen
        searchable
        options={[
          { value: 'xs', label: 'очень маленький' },
          { value: 'sm', label: 'маленький' },
          { value: 'md', label: 'средний' },
          { value: 'lg', label: 'большой' },
          { value: 'xl', label: 'очень большой' },
          { value: '1', label: 'очень большой' },
          { value: '2', label: 'очень большой' },
          { value: '3', label: 'очень большой' },
          { value: '4', label: 'очень большой' },
          { value: '5', label: 'очень большой' },
          { value: '6', label: 'очень большой' },
          { value: '7', label: 'очень большой' },
          { value: '8', label: 'очень большой' },
          { value: '9', label: 'очень большой' },
          { value: '10', label: 'очень большой' },
          { value: '11', label: 'очень большой' },
          { value: '12', label: 'очень большой' },
          { value: '13', label: 'очень большой' },
        ]}
      />
    </div>
  );
};
