// import { record } from "./ophan.js";
// record();

// Replace this import
// FROM: ophan-tracker-js
// TO: A simple object containing functions that are called within Frontend
import ophan from "ophan/ng";

ophan.record("blah");
// { record: (value) => window.guardian.ophan.record(value) }
// window.guardian.ophan.record('blah')
