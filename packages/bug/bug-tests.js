import { Tinytest } from 'meteor/tinytest';
import { Mongo } from 'meteor/mongo';
import { Test, TestTransformed } from 'meteor/bug';

Tinytest.add('bug - Regular Collection', function (test) {
  Test.remove({});

  const docs = [
    { length: 285113 },
    { length: 14203 },
    { length: 133052 },
  ];

  docs.forEach(doc => Test.insert(doc));

  const doc = Test.findOne();

  test.equal(Test.find(doc).count(), 1);
});

Tinytest.add('bug - Transformed Collection', function (test) {
  TestTransformed.remove({});

  const docs = [
    { length: 285113 },
    { length: 14203 },
    { length: 133052 },
  ];

  docs.forEach(doc => TestTransformed.insert(doc));

  const doc = TestTransformed.findOne();

  test.equal(TestTransformed.find(doc).count(), 1);
});

Tinytest.add('bug - Transformed (Renamed `length` fields)', function (test) {
  TestTransformed.remove({});

  const docs = [
    { foo: 285113 },
    { foo: 14203 },
    { foo: 133052 },
  ];

  docs.forEach(doc => TestTransformed.insert(doc));

  const doc = TestTransformed.findOne();

  test.equal(TestTransformed.find(doc).count(), 1);
});
