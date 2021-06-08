# Fetching

Userstory: as a user I want to see a list of movies

Setup

- [x] Install dependencies, axios

Fetching

- [x] Import useEffect
- [x] Set a useEffect to trigger onMount
- [x] Write an async function to fetch data
- [x] Call it in your useEffect
- [x] Check the data

Trigger a rerender

- [x] make a state to store the data
- [x] when you get a response in useEffect, setState (store the data)

Present the data in the new update cycle

> "[{}, {}, {}] =>
> [<h1>Crazy in Love</h1>, <h1>Love actually</h1>, <h1>What is love</h1>]"
> Dus: map

- [x] conditional schrijven: what if we don't have data?
- [ ] movies.map -> data laten zien

Userstory: as a user I want to search movies by filling in a keyword
