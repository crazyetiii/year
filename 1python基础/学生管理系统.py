from idlelib.grep import findfiles


class Student(object):
    def __init__(self, name, sex, zhuanye, score):
        self.name = name
        self.sex = sex
        self.zhuanye = zhuanye
        self.score = score

    def __str__(self):
        return f'姓名:{self.name},性别:{self.sex},专业:{self.zhuanye},学分:{self.score}'


class System:

    def __init__(self):
        self.students = []

    def start(self):
        while True:
            print("\t\t学生管理系统v0.1")
            print("1.添加学生信息")
            print("2.修改学生信息")
            print("3.删除学生信息")
            print("4.查看学生信息")
            print("5.退出系统")
            in_number = input('你输入选择的操作编号:1~5')
            if not in_number.isdigit():
                print("你输入有误!,请重新输入")
                continue
            in_number_int = int(in_number)
            if in_number_int == 1:
                name = input('请输入学生姓名:')
                sex = input('请输入学生性别:')
                zhuanye = input('请输入学生专业:')
                score = input('请输入学生学分:')

                student = Student(name, sex, zhuanye, score)
                self.students.append(student)
                print('已成功添加!')
                continue
            elif in_number_int == 2:
                name = input("请输入要查询的学生姓名:")
                for student in self.students:
                    if student.name == name:
                        while True:
                            in_sub_number = input('请输入要修改的item:1,性别;2,专业;3,学分')
                            if not in_sub_number.isdigit():
                                print("你输入不为数字,请重新输入")
                                continue
                            i = int(in_sub_number)
                            if i == 1:
                                sex_new = input("请输入新的性别:")
                                student.sex = sex_new
                                break
                            elif i == 2:
                                sex_new = input("请输入新的专业:")
                                student.zhuanye = sex_new
                                break
                            elif i == 3:
                                sex_new = input("请输入新的学分:")
                                student.score = sex_new
                                break
                            else:
                                print("你输入的数字非法选项,请重新输入")
                                continue
                        continue
            elif in_number_int == 3:
                name = input("请输入要查询的学生姓名:")
                find = True
                for student in self.students:
                    if student.name == name:
                        self.students.remove(student)
                        find = True
                        break
                if find:
                    print('已删除')
                else:
                    print('未找到,请重新选择')
                continue
            elif in_number_int == 4:
                if not self.students:
                    print('还没有学生信息')
                    continue

                find = False
                name = input("请输入要查询的学生姓名:")
                for student in self.students:
                    if student.name == name:
                        print(f'已找到，{student}')
                        find = True
                        break
                if not find:
                    print('未找到,请重新选择')
                continue
            elif in_number_int == 5:
                print("正在退出系统,请稍等")
                break
            else:
                print("你输入有误!,请重新输入")
                continue


if __name__ == '__main__':
    system = System()
    system.start()
