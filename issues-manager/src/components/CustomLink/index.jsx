import React from 'react'

import { StyledLink } from './style'

const CustomLink = ({ path, children }) => <StyledLink to={path}>{children}</StyledLink>

export default CustomLink
