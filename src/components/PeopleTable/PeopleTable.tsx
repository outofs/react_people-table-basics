import React from 'react';

import { Person } from '../../types';
import { PeopleRow } from '../PeopleRow';

type Props = {
  people: Person[];
  slug: string | undefined;
};

export const PeopleTable: React.FC<Props> = ({ people, slug }) => {
  return (
    <table
      data-cy="peopleTable"
      className="table is-striped is-hoverable is-narrow is-fullwidth"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Sex</th>
          <th>Born</th>
          <th>Died</th>
          <th>Mother</th>
          <th>Father</th>
        </tr>
      </thead>

      <tbody>
        {
          people.map(person => (
            <PeopleRow
              key={person.slug}
              people={people}
              person={person}
              slug={slug}
            />
          ))
        }
      </tbody>
    </table>
  );
};