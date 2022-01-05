import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const TriggerButton = styled.button`
  display: inline-flex;
  align-items: center;
  margin: 0;
  padding: 8px 12px;
  background-color: blue;
  color: white;
  width: 150px;
  height: 40px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: bold;
  box-shadow: seagreen 5px 5px;
  cursor: pointer;
  > svg {
    display: block;
    margin-left: 8px;
  }
`;

export const PopoverContainer = styled.div`
  position: absolute;
  border: 1px solid goldenrod;
  border-radius: 5px;
  background-color: yellowgreen;
  padding: 4px;
  box-shadow: seagreen 5px 5px;
`;
export const Options = styled.div`
  /* display: flex;
  flex-direction: column; */
  padding: 8px;
  max-height: 300px;
  overflow-y: auto;
`;
export const Option = styled.label`
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;
`;

export const SearchBox = styled.div`
  position: relative;
  margin-bottom: 8px;
  > svg {
    position: absolute;
    top: 58%;
    right: 4px;

    transform: translateY(-50%);
  }
`;

export const SearcInput = styled.input`
  padding: 0 20px 0 0;
  width: 100%;
`;
