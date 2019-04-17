# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 0.1.8 - 2019-04-17

### Fixed

- Clock popper z-index issue.

## 0.1.7 - 2019-04-11

### Added

- Style fang for Popper.js "top-start" placement.

## 0.1.6 - 2019-04-10

### Changed

- Close desktop clock after empty selection via `timePickerTestUtils.makeSelection`.

## 0.1.5 - 2019-04-09

### Changed

- Capitalize "Invalid Time" to be consistent with moment.js "Invalid Date".

## 0.1.4 - 2019-04-08

### Added

- Expose `timeFormat` from `timePickerTestUtils`.

## 0.1.3 - 2019-04-04

### Fixed

- Only call on `onFocusChange` on click outside if `focused` is true in `<TimePicker />` component.

## 0.1.2 - 2019-04-04

### Fixed

- Use an actual placeholder in `<TimePicker />` component.

## 0.1.1 - 2019-04-03

### Fixed

- Enforce leading zero for single digit hours in `<TimePicker />` component.

## 0.1.0 - 2019-04-01

### Added

- `<TimePicker />` component.
