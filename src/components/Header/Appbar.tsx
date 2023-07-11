import styled from 'styled-components'
import { StandardProperties, Property } from 'csstype'


interface AppbarProps {
  height: Property.Height,
  width: Property.Width,
  display: Property.Display,
  justifyContent: Property.JustifyContent,
  backgroundColor: Property.BackgroundColor,
  position: Property.Position,
  sx: StandardProperties
}

const Appbar = styled.header<Partial<AppbarProps>>(props => ({
  height: props.height,
  width:  props.width,
  display: props.display,
  justifyContent: props.justifyContent,
  backgroundColor: props.backgroundColor,
  position: props.position,
  ...props.sx
}))

Appbar.defaultProps = {
  height: '80px',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: 'transparent',
  position: 'unset'
}


export { Appbar }