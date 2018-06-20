import {
  PersonById,
  PersonRoleById,
  PersonAccountById,
  IsEmailExist,
  PersonsByRoleId,
} from './person';
import {
  LectureById,
  isLectureNameExistsWithinCourse,
  LecturesByCourseId
} from './lecture';
import {
  Courses,
  IsCourseNameExist,
  CourseById,
  NotSubscribedCourses
} from './course';
import {
  Specializations,
  SpecializationByCourseId
} from './specialization';
import { Countries } from './country';
import {
  CitiesByCountryId,
  ActiveCitiesByCountryId,
} from './city';
import { PresentationsBySpecializationId } from './presentation';
import {
  HomeworksBySpecializationId,
  HomeworksByLectureId
} from './homework';
import {
  TasksBySpecializationId,
  TasksByLectureId
} from './task';

export default {
  PersonById,
  PersonRoleById,
  PersonAccountById,
  PersonsByRoleId,

  IsEmailExist,

  Courses,
  IsCourseNameExist,
  CourseById,
  NotSubscribedCourses,

  Specializations,
  SpecializationByCourseId,

  Countries,
  CitiesByCountryId,
  ActiveCitiesByCountryId,

  LectureById,
  isLectureNameExistsWithinCourse,
  LecturesByCourseId,

  PresentationsBySpecializationId,

  HomeworksBySpecializationId,
  HomeworksByLectureId,

  TasksBySpecializationId,
  TasksByLectureId,
};
