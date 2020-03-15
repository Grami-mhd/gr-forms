# GrForms

A reactive form based library that serves as a very simple overhead in order to
build reactive forms.

## Form builder

the main goal provided by this library is to assure the ability of creating an angular form using a new concept.
The concept that we introduce here is very simple: we provide the ability to use form value changes observables, pipe them in all possible scenarios,
 and then pass down these observables to the form constructor (builder in our case).

This sounds a bit complicated right ?.
well it is a little bit. But when you think about it in a different way, it's not.

let's take the usual way of creating forms. call the constructor, create the form instance, then you can subscribe or pipe the valueChange observable to validate or invalidate some fields, to disable or enable some inputs based on some other form values, or even to override some field based on another.
this will result in creating so many subscriptions, so much non needed code etc.. (we all hate that)

Now let's imagine we magically have access to that value changes observable even before the form is created. :smirk:
we can pipe it into some async validators, and the pass these validators to the constructor the usual way, that would mean we have the ability to
validate fields based on other fields without making any subscriptions or non needed code, just pipe it and pass it down.
same thing goes for fields enabling and disabling, but this is a new constructor property introduced by this library, similar to angular asyncValidators you can now pass an observable that will be used to automatically enable or disable any field,
and based on our magically provided value changes observable, you can also pipe it and pass it to the constructor.
And the same this is for value overriding, also newly introduced behavior that makes it possible to set a control value based on an observable.

As we see this will make it possible to define all form fields, groups and arrays interactions defined even before the form itself is created, then there will be no need to make any kind of subscription to do some logic.
All will be just defined beforehand.

As you probably noticed there is a lot of piping going on. however we now provide a logic to auto pipe everything.
for anybody familiar with [ngRx](https://ngrx.io/) we introduced the same concept know as selectors.
this means that you just define the actual logic in a callback, and based on that we create an observable with the return value of your logic callback.

all of this is defined in single form builder class named `GrBuilder`.

###### public methods:
   - `createSelector<T>(projector: (value, form?) => T) => Observable<T>`
        - a callback to create a selector,
          takes a projector function that accepts the latest form value and the form itself as an optional parameter,
          and returns any value based on the required logic implemented.`
        - returns an observable that only emits when the return value of the projector function changes.
        - can and should be used to create selectors before building the form in order to create validators, form disablers and value overriders.
   - `buildForm(dataModel: GrAbstract)`
        - takes a data model in order to create the actual form. data model should be built using the provided build-model classes whitch are:
        
### Build Models
these 4 classes are basically a mirror of the angular provided controls except that they are used to build the angular form controls.
these classes take our previously mentioned selectors in order to use for building the controls 
- **GrControl:** used in order to build a FormControl.
- **GrGroup:** used in order to build a FormGroup.
- **GrArray:** used in order to build a FormArray.

Each of these Build Models takes an optional options object as a construction parameter

    Options {
      validators?: FormValidators;
      asyncValidators?: AsyncFormValidators;
      disabler?: Observable<FormDisable>;
      valueOverrider?: Observable<ValueOverride>;
    }

### Typed Forms Classes
- GrFormGroup<C, V>
    - A class that extends angular FormGroup and provides the possibility to get a type safe value and controls objects.
    - you can get a type safe controls using `grControls` and a type safe value using `grValue`
    - everything provided by angular FormGroup is still usable since this is just an extension.
- GrFormArray<C>
    - A class that extends angular FormArray and provides the possiblity to get a typeSafe value and controls objects.
    - you can get a type safe controls using `grControls` and a type safe value using `grValue`
    - everything provided by angular FormArray is still usable since this is just an extension.
