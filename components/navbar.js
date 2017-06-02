import { Toolbar, NavItem } from 'rebass';
import Link from 'next/link';
import { routes, siteRoot } from '../pages/routes.js';

export default ({ currentPage }) => (
  <Toolbar>
    { Object.keys(routes).filter(path => routes[path].nav).map(path => (
      <Link href={`${siteRoot}${path}`} key={path}>
        <NavItem color={ currentPage === path ? "midgray" : "white" }>
          {routes[path].title}
        </NavItem>
      </Link>
    ))}
  </Toolbar>
)
