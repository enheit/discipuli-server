import model from '../../../models';
import { CourseCreationFields } from '../../inputs';
import { Course } from '../../types';

export default {
  type: Course,
  description: 'Create a course',
  args: {
    courseCreationFields: {
      type: CourseCreationFields
    }
  },
  async resolve(root, args, context) {
    const course = await model.Course.create({
      name: args.courseCreationFields.courseName,
      cityId: args.courseCreationFields.cityId,
      startDate: args.courseCreationFields.startDate,
      endDate: args.courseCreationFields.endDate,
    });

    const courses = await model.Courses.create({
      courseId: course.courseId,
      specializationId: args.courseCreationFields.specializationId,
    });

    return course;
  }
};
