import React from 'react';
import tunnel from '@assets/images/home/tunnel.png';
import { Col, Row } from 'reactstrap';
import { ImageMaker } from '../../../common';
import { useTranslate } from '@app/hooks';
import { Link } from '@navigation';
const Flex = () => {
  const t = useTranslate('COMP_Flex');
  return (
    <Row className="py-3 p-lg-5">
      <Col md={5}>
        <ImageMaker src={tunnel} />
      </Col>
      <Col md={7} className="flex-col-start gap-3 px-4">
        <h4> {t('INNVATIVE_SOLUTIONS')} </h4>
        <p>
          <strong>العزل المائي</strong> هو عملية تستخدم لمنع تسرب المياه والرطوبة إلى الداخل. يتم ذلك من خلال وضع طبقة
          واقية على الأسطح والأرضيات المعرضة للرطوبة. يعتبر العزل المائي أمرًا مهمًا جدًا في البيئات الرطبة، حيث تتعرض
          الأسطح والأرضيات بشكل مستمر للتعرض للرطوبة.
        </p>
        <p>
          <strong>العزل المائي بالمواد المرنة</strong>: وهي عملية استخدام المواد المرنة مثل البوليمرات والمطاط لتغطية
          الأسطح والأرضيات.
        </p>
        <p>
          <strong>أنظمة العزل المائي بالأغشية الرقيقة</strong>: تتضمن هذه الأنظمة استخدام غشاء رقيق ومرن يتم تطبيقه على
          السطح المراد عزله. وتستخدم عادة للأسطح السطحية مثل الأسطح والشرفات.
        </p>
        <p>
          <strong>أنظمة إسمنتية معدَّلة بالبوليمرات</strong>: تتضمن هذه الأنظمة استخدام طلاء يعتمد على إسمنت معدَّل
          بالبوليمرات لتحسين أدائه. وتستخدم عادة للهياكل المصنوعة من الخرسانة مثل القبو وحوض السباحة.
        </p>
        <Link href="/" className="text-start mt-2 bg-primary text-white flex-between px-3 py-2 rounded">
          {t('SEE_MORE')}
          <i className="fa-solid fa-arrow-left-long bg-white text-primary p-1 rounded ms-2"></i>
        </Link>
      </Col>
    </Row>
  );
};

export default Flex;
