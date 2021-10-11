import React from 'react';
import { render, screen } from '@testing-library/react';
import { Project } from '../../interface/Project';
import ProjectItem from '../../component/ProjectItem';
import '@testing-library/jest-dom';

test('render project object', () => {
  const project : Project = {
    id: 'id1',
    title: 'project1',
    descriptions: 'description1',
    featured_image: 'featured_image1',
    demo_link: 'demo_link1',
    source_link: 'source_link1',
    vote_total: 12,
    vote_ratio: 13,
    created: new Date('2021-10-09'),
    tags: ['javascript', 'python']
  };

  render(<ProjectItem project={project} />);
  let searchElement = screen.getByText(/project1/i);
  expect(searchElement).toBeInTheDocument();

  const img = screen.getByRole('img');
  expect(img).toHaveAttribute('src', 'featured_image1');
  expect(img).toHaveAttribute('alt', 'project thumbnail');

  // searchElement = screen.getByText(/demo_link1/i);
  // expect(searchElement).toBeInTheDocument();

  searchElement = screen.getByText(/12/i);
  expect(searchElement).toBeInTheDocument();

  searchElement = screen.getByText(/13/i);
  expect(searchElement).toBeInTheDocument();

  // searchElement = screen.getByText(/2021-10-09/i);
  expect(searchElement).toBeInTheDocument();

  searchElement = screen.getByText(/javascript/i);
  expect(searchElement).toBeInTheDocument();

  searchElement = screen.getByText(/python/i);
  expect(searchElement).toBeInTheDocument();
});
