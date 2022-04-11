import styled from 'styled-components'

const PrimaryButton = styled.button`
  padding-right: 1rem;
  padding-left: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  display: inline-block;
  background-color: #7c3aed;
  border: #7c3aed solid;
  color: #fff;
  border-radius: 0.5rem;
  transition: 300ms;
  &:hover {
    background-color: #8b5cf6;
    border: #8b5cf6 solid;
  }
  &:focus {
    background-color: #8b5cf6;
    border: #8b5cf6 solid;
    outline: none;
  }
`

export default PrimaryButton
