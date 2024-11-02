# A-Team Calls

I'm intentionally keeping this Readme very minimal right now.

## Contributions

### Content Contributions

You can find the data that feeds into the app at `/src/data/*`

#### People

```yaml
location: /src/data/people.ts
utilities:
	- createPerson()
```

Mini profiles for Ben, Steph, and each of the guides. Use the `createPerson()` function to create each person.

#### Events

```yaml
location: /src/data/event.ts
utilities:
	- createEvent()
```

Template for each of the call types. This is used to reduce repetition when scheduling calls. Use the `createEvent()` function to create each event template.

#### Schedule

```yaml
location: /src/data/schedule.ts
utilities:
	- createWeeklyCall()
	- createOneCall()
```

Past and future calls, each one defines a dare and references an event template. Filtering and sorting is handle within the application. Use the `createWeeklyCall()` or `createOneCall()` function to create each schedule.

`createWeeklyCall()` will **automatically generate a date** for the next call. This must be for calls that _always_ happen _every_ week at the same time. Alternatively, `createOneCall()` will schedule one specific call.

### Other Contributions

If your changes go beyond content, or bug fixes, please create an issue to discuss your proposed changes before filing a pull-request. This will avoid the risk of any time being spent on a PR that is not in line with this projects goals.

## Developing

I'm assuming you have node and pnpm setup.

```bash
# Install dependencies
pnpm i

# Run the development server
pnpm dev
```

## Building

To create a production version of the app:

```bash
npm build

# Serve the production version
pnpm preview
```
