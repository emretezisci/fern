<?php

namespace Seed\V2\Problem;

use Seed\Core\SerializableType;
use Seed\Core\JsonProperty;
use Seed\V2\Problem\TestCaseImplementationDescription;

class TestCaseImplementation extends SerializableType
{
    #[JsonProperty("description")]
    /**
     * @var TestCaseImplementationDescription $description
     */
    public TestCaseImplementationDescription $description;

    #[JsonProperty("function")]
    /**
     * @var mixed $function
     */
    public mixed $function;

    /**
     * @param TestCaseImplementationDescription $description
     * @param mixed $function
     */
    public function __construct(
        TestCaseImplementationDescription $description,
        mixed $function,
    ) {
        $this->description = $description;
        $this->function = $function;
    }
}
