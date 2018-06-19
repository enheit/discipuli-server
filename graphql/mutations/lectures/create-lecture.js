import model from '../../../models';
import { LectureCreationFields } from '../../inputs';
import { Lecture } from '../../types';

export default {
  type: Lecture,
  description: 'Create a lecture',
  args: {
    lectureCreationFields: {
      type: LectureCreationFields
    }
  },
  async resolve(root, args, context) {
    const originalPresentation = await model.Presentation.findOne({
      where: {
        id: args.lectureCreationFields.presentationId,
      },
    });

    const lecturePresentation = await model.LecturePresentation.create({
      parentId: args.lectureCreationFields.presentationId,
      name: originalPresentation.name,
      description: originalPresentation.description,
    });

    const originalTask = await model.Task.findOne({
      where: {
        id: args.lectureCreationFields.taskId,
      },
      attributes: ['id', 'name', 'description']
    });

    const lectureTask = await model.LectureTask.create({
      parentId: args.lectureCreationFields.taskId,
      name: originalTask.name,
      description: originalTask.description,
    });

    const originalHomework = await model.Homework.findOne({
      where: {
        id: args.lectureCreationFields.homeworkId,
      },
    });

    const lectureHomework = await model.LectureHomework.create({
      parentId: args.lectureCreationFields.homeworkId,
      name: originalHomework.name,
      description: originalHomework.description,
    });

    const lecture = await model.Lecture.create({
      courseId: args.lectureCreationFields.courseId,
      lecturePresentationId: lecturePresentation.id,
      lecturerId: args.lectureCreationFields.lecturerId,
      name: args.lectureCreationFields.name,
      startDate: args.lectureCreationFields.startDate,
      endDate: args.lectureCreationFields.endDate,
    });

    const lectureTasks = await model.LectureTasks.create({
      lectureId: lecture.id,
      lectureTaskId: lectureTask.id,
    });

    const lectureHomeworks = await model.LectureHomeworks.create({
      lectureId: lecture.id,
      lectureHomeworkId: lectureHomework.id,
    });

    return lecture;
  }
};
